#### 混入with

``` dart
class A{
  void a(){

  }
}

class B{
  void b(){

  }
}

class E{
  void e(){

  }
}

// A 和 B 两个类不能有构造函数
// 则可以通过 with 混合 到C类中
class C with A,B{
  void c(){

  }
  void a(){
    // 调用父类的方法
    super.a();
  }
}
// 如果D类中 不创建自己的方法 则 可以用下面的写法
class D = Object with A,B,E;

// 混入方法如果有相同的方,
// 1 第一调用自身的方法,
// 2 第二调用 最后一个 类中有效的方法 ,例如 with A,B;  则 调用B中的方法

```

#### Mixin目的和使用方法（with）
官网文档：Mixins are a way of defining code that can be reused in multiple class hierarchies. They are intended to provide member implementations en masse.

大概意思：Mixin是一种定义可在多个类层次结构中复用代码的方法。Mixin的目标是为这些类提供一批成员实现（类属性+类方法）。

总结起来：使用Mixin可以让代码被其他类所使用（包括属性和方法）。

使用方法：通过mixin关键字定义一个Mixin类；通过with关键字，一个类可以同时复用多个mixin成员实现。

代码样例：如下代码，ClassA同时拥有了MixinOne+MixinTwo+MixinThree这3个Mixin的所有成员属性和类方法（感觉有的像多继承？）。

```dart
mixin MixinOne {
  ......
}
 
mixin MixinTwo {
  ......
}
 
mixin MixinThree {
  ......
}
 
class ClassA extends SupperClass with MixinOne, MixinTwo, MixinThree {
  ......
}
```

Mixin的使用有哪些约束呢？

1. Mixin不能继承其他Mixin或者抽象类。
2. Mixin不能有构造方法，也就是Mixin不能被实例化。

#### Mixin限定/继承其他类型（on）
为了更好的维护Mixin这些可复用的代码，我们有时需要严格限定使用Mixin的类型，通过`on`关键字达到目的。

代码样例：如下代码，MixinFine通过`on`关键字限定使用它的类型是SupperClass，凡是使用MixinFine的类，必须extends继承SupperClass这个Mixin限定的类型。

```dart
class SupperClass {
  ......
}
 
mixin MixinFine on SupperClass {
  ......
}
 
class ClassFine extends SupperClass with MixinFine {
  ......
}
```

#### mixin class介绍和使用（类+Mixin）

我们通过`mixin`定义一个Mixin，通过class定义一个类；那么通过`mixin clas`s就可以定义一个mixin和一个类，它们具有相同的名字和相同的类型。

Mixin和类的所有约束，在mixin class同时生效，包括如下：

Mixin不支持extends继承其他类和with复用其他Mixin，因此mixin class也不能有extends继承其他类和with复用其他Mixin
普通类不支持通过on关键字限定可使用类型，因此mixin class也不支持on关键字（但是我们可以通过abstract达到此目的）。
代码样例：如下代码，`mixin class`可通过`with`关键字当成Mixin被使用，也可通过`extends`关键字当成类被继承使用。

```dart
abstract mixin class Musician {
  // 含有abstract方法，使用它的类必须实现本方法
  void playInstrument(String instrumentName);
 
  void playPiano() {
    playInstrument('Piano');
  }
  
  void playFlute() {
    playInstrument('Flute');
  }
}
 
class Virtuoso with Musician {
  // with关键字，Musician作为一个Mixin被使用
  void playInstrument(String instrumentName) {
    print('Plays the $instrumentName beautifully');
  }  
} 
 
class Novice extends Musician {
  // extends关键字，Musician作为一个类被继承
  void playInstrument(String instrumentName) {
    print('Plays the $instrumentName poorly');
  }  
}
```

#### 扩展问题：Mixin如何解决二义性？（覆盖）
通过上面的说明，一个类可以使用多个Mixin的实现，那么有个问题：他们是如何解决二义性的呢？

样例说明：如下代码，我们有2个Mixin，他们的属性和方法都是相同，同时使用他们时，最终的属性和方法是哪个Mixin的呢？

```dart
mixin MixinA {
  String className = "MixinA";
 
  void log() {
  print(className);
  }
}
 
mixin MixinB {
  String className = "MixinB";
 
  void log() {
  print(className);
  }
}
 
class ClassMixinAB with MixinA, MixinB {
}
 
class ClassMixinBA with MixinB, MixinA {
}
 
void main() {
  ClassMixinAB mixinAB = ClassMixinAB();
  mixinAB.log();
  // 结果：MixinB
 
  ClassMixinBA mixinBA = ClassMixinBA();
  mixinBA.log();
  // 结果：MixinA
}

```
`通过上面2个代码样例，基本可以判断：Mixin解决二义性的方式非常粗暴，后面Mixin覆盖前面Mixin！！！`

#### Mixin使用场景：打印State生命周期日志

Mixin通过代码复用，可以应用在很多的应用场景。下面代码样例，可以在Flutter组件生命周期逻辑执行之后，打印响应的日志。

样例代码：LogStateMixin通过on关键字限定/继承了State类型，内部的方法，均通过super代理了State的内容，同时打印相应的日志。

```dart
mixin LogStateMixin<T extends StatefulWidget> on State<T> {
 
  @override
  void initState() {
    super.initState();
   print("====initState====");
  }
  
  @override
  void dispose() {
   super.dispose();
   print("====dispose====");
  }
 
  // 其他方法......
}

```
在凡是想要监听组件的生命周期的组件中，可以使用上面的Mixin即可，无其他侵入代码，特别适合在Flutter应用研发过程中，通过日志观测组件的生命周期：

```dart
class _MinePageState extends State<MinePage> with LogStateMixin<MinePage>
  // 我的页面逻辑，无需关心日志....

```

### flutter 扩展类extension...on...

``` dart
extension ParseNumbers on String {
  int parseInt() {
    return int.parse(this);
  }
  double parseDouble() {
    return double.parse(this);
  }
}

// 使用:
final d = '2';
print(d.parseInt());

```

#### 接口实现(implements)

Flutter是没有`interface`的，但是Flutter中的每个类都是一个隐式的接口，这个接口包含类里的所有成员变量，以及定义的方法。

如果有一个类 A,你想让类B拥有A的API，但又不想拥有A里的实现，那么你就应该把A当做接口，类B implements 类A.

所以在Flutter中:

class 就是 interface
当class被当做interface用时，class中的方法就是接口的方法，需要在子类里重新实现，在子类实现的时候要加@override
当class被当做interface用时，class中的成员变量也需要在子类里重新实现。在成员变量前加@override
实现接口可以有多个
看如下的代码

```dart

class Television {
  void turnOn() {
    _illuminateDisplay();
  }

  void _illuminateDisplay(){
  }
}

class Carton {
  String cartonName = "carton";

  void playCarton(){

  }
}

class Movie{
  void playMovie(){

  }
}

class Update{
  void updateApp(){

  }
}

class Charge{

  void chargeVip(){

  }
}

class SmartTelevision extends Television with Update,Charge implements Carton,Movie {
  @override
  String cartonName="SmartTelevision carton";

  void turnOn() {
    super.turnOn();
    _bootNetworkInterface();
    updateApp();
    chargeVip();
  }

  void _bootNetworkInterface(){
  }

  @override
  void playCarton() {
    // TODO: implement playCarton
  }

  @override
  void playMovie() {
    // TODO: implement playMovie
  }

}

```