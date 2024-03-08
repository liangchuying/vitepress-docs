### 1.构造函数传值

#### 在创建widget时，可以通过构造函数将参数传递给子widget。例如：
``` dart 
class ChildWidget extends StatelessWidget {
  final String title;

  const ChildWidget({Key? key, required this.title}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(title);
  }
}

class ParentWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChildWidget(title: 'Hello World');
  }
}

```

### 2.回调函数传值
#### 父widget可以在创建子widget时，传递一个回调函数，当子widget需要把值传给父widget时，就调用这个回调函数。例如：

``` dart
class ChildWidget extends StatelessWidget {
  final ValueChanged<String> onChanged;

  const ChildWidget({Key? key, required this.onChanged}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextField(
      onChanged: (value) {
        onChanged(value); // 调用回调函数
      },
    );
  }
}

class ParentWidget extends StatefulWidget {
  @override
  _ParentWidgetState createState() => _ParentWidgetState();
}

class _ParentWidgetState extends State<ParentWidget> {
  String _text = '';

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ChildWidget(
          onChanged: (value) {
            setState(() {
              _text = value; // 更新状态
            });
          },
        ),
        Text(_text),
      ],
    );
  }
}

```

### 3.InheritedWidget传值

#### InheritedWidget是Flutter框架提供的一种特殊的widget，它可以沿着widget树向下传递数据。当需要在widget树中共享数据时，可以使用InheritedWidget。例如：

``` dart

class MyInheritedWidget extends InheritedWidget {
  final String data;

  MyInheritedWidget({Key? key, required this.data, required Widget child})
      : super(key: key, child: child);

  static MyInheritedWidget of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<MyInheritedWidget>()!;
  }

  @override
  bool updateShouldNotify(MyInheritedWidget oldWidget) {
    return data != oldWidget.data;
  }
}

class ChildWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final data = MyInheritedWidget.of(context).data;
    return Text(data);
  }
}

class ParentWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MyInheritedWidget(
      data: 'Hello World',
      child: ChildWidget(),
    );
  }
}


```

#### state Widget 获取实例值

``` dart

class child extends StatefulWidget {
  final String name = 'Hello';
  final double height = 10;
  String GetChar() {
    return 'child';
  }
  const child({super.key});

  @override
  State<child> createState() => _childState();
}

class _childState extends State<child> {
  
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: widget.height,
        ),
        Text(widget.name),
        Text(widget.GetChar()),
      ],
    );
  }
}

```

#### 关于part、library和part of

``` dart
//  定义库的名字
library global;

//  文件中引用的公共包
import 'dart:convert';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:i_chat/tools/utils.dart';
import 'package:shared_preferences/shared_preferences.dart';
import './tools/network.dart';
import 'package:dio/dio.dart';
import 'dart:math';
import 'package:provider/provider.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;

//  组成这个库的其他文件
part './model/User.dart';
part './model/FriendInfo.dart';
part './model/Message.dart';

//  ...其他业务代码
```

在文件的开头使用`library`标识符定义库的名字，这也是其他子文件与其耦合起来的关键，`part`标识符指明组成这个库的其他文件。需要注意的是，`part`部分一定要在`import`部分的后面。
子文件的组织方式如下，以`./model/FriendInfo.dart`为例：

``` dart

//  指明与其关联的父库
part of global;

//  定义其他内容
class FriendInfo {
    ...
}
```

::: info 总结
:::

* import 'dart:xxx'; 引入Dart标准库
* import 'xxx/xxx.dart';引入绝对路径的Dart文件
* import 'package:xxx/xxx.dart'; 引入Pub仓库pub.dev(或者pub.flutter-io.cn)中的第三方库
* import 'package:project/xxx/xxx.dart';引入自定义的dart文件
* import 'xxx' show compute1，compute2 只导入compute1，compute2
* import 'xxx' hide compute3 除了compute都引入
* import 'xxx' as compute4 将库重命名，当有名字冲突时
* library compute5; 定义库名称
* part of compute6; 表示文件属于某个库
