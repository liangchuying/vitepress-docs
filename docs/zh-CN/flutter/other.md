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