## Dart语法

```dart
// ：注释

viod：表示函数没有返回值

var：让 Dart 自动判断类型的声明方式

print()：打印内容

int：整型数字类型

```

### Object 和 dynamic 的区别
Object 是所有类的基类，相当于一个可以兼容所有类型的超级类型。dynamic 就是一个动态类，类似 TypeScript 的 any。

在下面代码中，如果用 Object 类声明会过不了编译。

```dart
  Object a = 'String';
  a.subString(1); //❌The method 'subString' isn't defined for the type 'Object'
```
换成dynamic就表示这是动态类型，可以绕过编译检查。

```dart
  dynamic a = 'String';
  a.substring(1);
```

final 和 const 的区别

常量可以用 final 和 const 修饰符来声明,这两个关键字可以替代 var或者加在类型前面。

```dart
final name='some name';
const age=20;
const int age = 123;
final List list = [];
```

final包含了const的功能，区别在于：

* final 可以一开始不赋值，如果赋值了则只赋值一次。const 一开始就需要赋值
* const 必须给一个明确的编译常量值（即编译期间就确定的值）
* final 可以通过计算/函数获取一个值（即运行期间确定的值）
* final 不仅有 const 编译时的常量的特性，而且是惰性初始化，即在运行时第一次使用前才初始化


```dart
  // 报错了 const一开始就需要赋值  The constant 'a' must be initialized.
	const a; 
  // 报错了 Const variables must be initialized with a constant value.
  const a = new DateTime.now();

  final b;
  b = new DateTime.now(); // 不会报错
```

### const
在声明 const 变量时可以直接为其赋值，也可以使用其它的 const 变量为其赋值。

```dart
const bar = 1000000; // Unit of pressure (dynes/cm2)
const double atm = 1.01325 * bar; // Standard atmosphere
```

#### const 关键字不仅仅用来定义常量，还可以用来创建常量值，该常量值可以赋予给任何变量。也可以将构造函数声明为 const，这种类型的构造函数创建的对象是不可改变的。

```dart
  var foo = const [];
  final bar = const [];
  const baz = []; // 相当于`const []`
```

#### 使用初始化表达式为常量赋值就可以省略掉关键字 const，比如常量 bar 的赋值就省略掉了 const。

#### 使用 const 变量还能够创建一个类似单例的对象，比如下面的语法，能够创建一个相同的对象

```dart
class Person {
  final String name;
  const Person(this.name);
}

void main(List<String> args) {
  const p1 = const Person('myname');
  const p2 = Person('myname'); // const 可以省略
  print(identical(p1, p2));// 这两个对象是相等的
}
```

### 默认值

#### 未初始化并且可空类型的变量的默认值是 null。

```dart
int? lineCount;
assert(lineCount == null);
var a;
assert(a == null);
```

assert() 的调用将会在生产环境的代码中被忽略掉。在开发过程中，assert(condition) 将会在 条件判断 为 false 时抛出一个异常。

如果启用了空安全，那么一个变量必须在你用它之前初始化

```dart
  int count;
  // The non-nullable local variable 'count' must be assigned before it can be used.不为空的局部变量必须先赋值后使用
  print(count);
```

我们不必在一开始声明时就初始化变量，但是需要在用之前赋值。举个例子，下面的代码是有效的，因为 dart 检测到 count 被传递给 print 函数使用之前是一个已经被赋值的变量

```dart
  int count;
  count = 0;
  print(count);
```
顶级和类变量被懒惰地初始化：初始化代码在首次使用变量时运行。

### 数据类型

* Numbers类型：int 整型和 double 浮点类型

* Strings类型：String

* Booleans类型：bool

* Lists类型：List

* Maps类型：Map类型

* Sets类型：Set

* Symbols类型：Symbol

* Null：null

* Runes：常用于在 Characters API 中进行字符替换

Dart 中每个变量引用都指向对象，通常也可以使用构造器来初始化变量。一些内置的类型有自己的构造器，比如使用Map()创建一个map对象。
在 Dart 中有一些特殊作用的类型：

1. Object：是除了 Null 类型以外所有类型的超类
2. Future和 Stream：用于异步
3. Iterable：用于 for-in 循环和同步的 generator 构造器
4. Never：象征表达式永远无法被到达。多用于函数抛出例外。
5. dynamic：如果需要禁止静态检查，可以使用这个类型。平常可以用 Object 或者 Object?代替。
6. void：多用于表示没有返回值

#### 数字转字符串：toString()

```dart
  int a = 123;
  double b = 123.23;
  String _a = a.toString();
  assert(_a == '123');
  String _b = b.toStringAsFixed(1);
  assert(_a == '123.2');
```

#### 字符串转数字：parse
```dart
 String a = '123';
  String b = '123.23';
  int _a = int.parse(a);
  assert(_a == 123);
  double _b = double.parse(b);
  assert(_b == 123.23);
```
建议都用 double.parse 转换成数字

### Strings

字符串可以用单/双引号，在双引号中使用单引号可以不用转义，反过来也是一样。
```dart
var s1 = '使用单引号创建字符串字面量。';
var s2 = "双引号也可以用于创建字符串字面量。";
var s3 = '使用单引号创建字符串时可以使用斜杠来转义那些与单引号冲突的字符串：\'。';
var s4 = "而在双引号中则不需要使用转义与单引号冲突的字符串：'";
```
字符串拼接用$或者${}或+,具体用法是${表达式}，如果是单变量，则可以省略{}.如果表达式的结果是一个对象，那么 Dart 会自动调用该对象的 toString 方法获取一个字符串。

```dart
  var s = 'this is string';
  var map = {"name": "qiuyanxi"};
  print('s 的值是：${s.toUpperCase()} map的值是$map');
  // s 的值是：THIS IS STRING map的值是{name: qiuyanxi}
```

使用三个单引号或者三个双引号能创建多行字符串。

```dart
var s1 = '''
You can create
multi-line strings like this one.
''';

var s2 = """This is also a
multi-line string.""";
```
如果希望字符串中的内容不会被做任何处理（比如转义），则可以在字符串前面加上 r 来创建 raw 字符串。

```dart
var s = r'在 raw 字符串中，转义字符串 \n 会直接输出 “\n” 而不是转义为换行。';
```

如果字符串是const 声明的编译时常量，编译时常量 (null、数字、字符串、布尔) 才可以作为该字符串字面量的插值表达式。

```dart
// 这些在 const 声明的字符串常量中能用
const aConstNum = 0;
const aConstBool = true;
const aConstString = 'a constant string';

// 这些在 const 字符串中不能用，用 var 声明的才有用
var aNum = 0;
var aBool = true;
var aString = 'a string';
const aConstList = [1, 2, 3];

const validConstString = '$aConstNum $aConstBool $aConstString';
// const invalidConstString = '$aNum $aBool $aString $aConstList';
var invalidConstString = '$aNum $aBool $aString $aConstList';
```

### List
list的声明方式

```dart
  var arr = <String>['0', '1', '2', '3']; // 定义数组类型
  var arr1 = [0, 1, 2, 3, 4]; //自动推断
  List arr5 = <String>['0', '1', '2', '3'];// 使用类型的方式定义list
```

* 使用 const 关键字创建编译时变量，不能修改、增加

```dart
  var arr2 = const [1, 2, 3, 4]; // 创建一个编译时的常量，不能修改、增加
  arr2.add(5); // Cannot add to an unmodifiable list
```

* 创建一个固定长度的集合

```dart
	var arr3 = List.filled(2,'');// 创建一个固定长度的集合
	var arr4 = List.filled<int>(2,0);// 创建一个固定长度的有类型的集合
```

* 扩展操作符对数组的操作

```dart
  var list = [1, 2, 3];
  var list2 = [0, ...list]; // 将 list 插入 list2 中
  assert(list2.length == 4);
```

* 空感知操作符对数组的操作,如果是 null 则可以避免异常

```dart
var list;
var list2 = [0, ...?list];
assert(list2.length == 1);
```

* 获取数组长度

```dart
  var arr = <String>['0', '1', '2', '3']; 
  arr.length
```

* 判断是否为空

```dart
  var arr = <String>['0', '1', '2', '3']; 
  arr.isEmpty
  arr.isNotEmpty
```

* 翻转数组

```dart
var arr = ['1', '2'];
var newArr = arr.reversed.toList();
print(newArr);
```

* 在 List 中可以使用 if 或 for

```dart
  var nav = ['Home', 'Furniture', 'Plants', if (true) 'Outlet'];
  var listOfInts = [1, 2, 3];
  var listOfStrings = ['#0', for (var i in listOfInts) '#$i'];
  print(listOfStrings); // [#0, #1, #2, #3]
```

### Set

dart 的 set 声明
```dart
  var halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};
  Set s = <String>{'fluorine', 'chlorine'};
```

在{}前加上类型参数可以创建一个空的 Set，或者将{}赋值给一个 Set 类型的变量
```dart
  var s = <String>{};
  Set _s = <String>{};
  Set<String> names = {};
  var _names = {}; // 这是一个 map 不是 set
```

* 使用add方法或者addAll方法可以添加项目
```dart
  var sets = <Object>{};
  sets.add('1');
  sets.addAll([1, 2, 3]);
  print(sets);
```

* 使用.length可以获取 Set 中元素的数量
```dart
    final sets = {'fluorine', 'chlorine'};
    print(sets.length);
```

* Set 变量前添加const关键字创建 Set 编译时变量
```dart
final constantSet = const {
  'fluorine',
  'chlorine',
  'bromine',
  'iodine',
  'astatine',
};
// constantSet.add('helium'); // This line will cause an error.
```

* Set 可以使用扩展操作符和空感知操作符
```dart
  final sets = {'fluorine', 'chlorine'};
  var maybeNull;
  final a = <String>{'hello', ...sets};
  final b = <String>{'hello', ...?maybeNull};
  print(a);
  print(b);
```
### Maps 类型

Dart 中的 Maps 类型类似 JavaScript 中的 Map 数据结构，区别是需要强制在 key 上加引号。Maps 类型在 Dart 中当 object 用。

声明 map，使用 var 能让 Map 自动推断，也可以手动写Map 的类型

```dart
  const a = [1, 2, 3];
  var map = {a: '123'}; // map 当 js 的map 用，key 不用写成[key]
  var map1 = <String,String>{'a': '123'}; // map 当js 的 object用，key需要加引号
  var map2 = Map(); // 创建自由类型的 map,可以加 new
  var map3 = Map<int, String>(); // 创建 map 时定义类型
  map3[1] = '1'; // 给 map 赋值
  print(map);
  print(map1);
  print(map.containsKey(a)); // js的 map.has 方法判断是否有这个 key
```

JavaScript 中可以用new Map()让普通函数变成构造函数，dart 中则可以省略掉 new，上面的代码使用Map()构造函数就可以创建一个 map 对象。

* 添加单个属性和多个属性
```dart
  var map = {};
  map['age'] = 20;
  map.addAll({"name": 'qiuyanxi', 1: 2});
  print(map);
```

* 如果key 不在 map 中会返回 null
```dart
  var map = {};
  assert(map['name'] == null);
```

* 获取.length 可以获取键值对的数量
```dart
 var map = {};
  assert(map.length == 0);
```

* 在一个 Map 字面量前添加 const 关键字可以创建一个 Map 编译时常量：
```dart
final constantMap = const {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};

// constantMap[2] = 'Helium'; // This line will cause an error.
```

* Map 使用扩展运算符和空感知操作符
```dart
  var map = {'name': "qiuyanxi"};
  Map? maybeNull;
  var newMap = {...map};
  var newMap2 = {...?maybeNull};
```

### 获取类型

使用runtimeType可以获得对象的类型
```dart
    var n = null;
    var s = 'String';
    print(n.runtimeType); // Null
    print(s.runtimeType); // String
```

### 函数

### 异步

### Future

#### Future 跟 JavaScript 的Promise 差不多，要使用async和await来让代码变成异步的。必须在带有 async 关键字的 异步函数 中使用 await：

```dart
Future<void> checkVersion() async {
  var version = await lookUpVersion();
  // Do something with version
}
```
上面的代码会等到lookUpVersion处理完成，再执行下一步操作。

::: info
await 表达式的返回值通常是一个 Future 对象；如果不是的话也会自动将其包裹在一个 Future 对象里。 Future 对象代表一个“承诺”， await 表达式会阻塞直到需要的对象返回。
:::

#### async关键字
跟 JavaScript 的规则差不多，单单使用async只能生成 Future 对象，并不会让代码变成异步的。举个🌰
```dart
    Future<void> checkVersion() async {
        print(123);
    }
    checkVersion();
    print(456);
    // 123
    // 456
```

上面的代码并不会让checkVersion变成异步代码，因为 123 在 456 前面打印了。

如果加上 await 就可以对代码进行阻塞，使其变成真正的异步代码。

```dart
  Future<int> getVersion() async => 123;

  Future<void> checkVersion() async {
    print(0); //这里还是同步代码
    var res = await getVersion(); //这里开始变成异步
    print(res);
  }

  checkVersion();
  print(456);
```

#### 异常处理
使用 try、catch 以及 finally 来处理使用 await 导致的异常：

```dart
try {
  version = await lookUpVersion();
} catch (e) {
  // React to inability to look up the version
}
```

### Typedefs

typedefs 是类型别名，是一种引用某一类型的简便方法，常用于封装类型，它使用 typedef 关键字。

比如项目中有一个类型是数字类型的 List，我们将它封装起来变成一个类型别名,就可以直接使用

```dart
typedef IntList = List<int>;

IntList a = [1, 2, 3];
```

当传参是函数并且需要明确的类型定义时，使用类型别名可以简化代码

```dart
  void PrintString(String getS(String str)) {
    print(getString('name'));
  }
```

上面的PrintString函数需要传入一个返回值和参数都为 String 的函数，使用typedef简化代码：

```dart
    typedef GetString = String Function(String str);
    
    void PrintString(GetString getS) {
        print(getString('name'));
    }
```
#### https://juejin.cn/post/7075337131974983688?searchId=202402181021402EE7287C8D494C39F10C#heading-70