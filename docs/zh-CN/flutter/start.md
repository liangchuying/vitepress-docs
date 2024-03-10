
在`Flutter`中，widget分为两类：Stateful（有状态）和 stateless（无状态）widget。

stateless widget 没有内部状态，Icon、IconButton, 和Text都是无状态widget, 它们都是 StatelessWidget的子类。

stateful widget 是动态的，用户可以和其交互（例如输入一个表单、 或者移动一个slider滑块），或者可以随时间改变 （也许是数据改变导致的UI更新）。Checkbox, Radio, Slider, InkWell, Form, and TextField 都是 stateful widgets, 它们都是 StatefulWidget的子类。

StatelessWidget
Stateless widgets 是不可变的, 这意味着它们的属性不能改变——所有的值都是最终的。

如果无状态Widget里面有子Widget，并且子Widget是有状态的，则子Widget的内容是可以通过setState来更改的。无状态Widget影响的仅仅是自己是无状态的，不回影响他的父Widget和子Widget。

StatefulWidget
Stateful widgets 持有的状态可能在widget生命周期中发生变化。

创建一个有状态的widget需要进行以下操作：

要创建一个自定义有状态widget，需创建两个类：StatefulWidget和State。
我们要定义一个widget类，继承自StatefulWidget。
子State，包含该widget状态并定义该widget build()方法的类，它继承自State。
状态对象包含widget的状态和build() 方法。
当widget的状态改变时，状态对象调用setState()，告诉框架重绘widget

* 创建StatefulWidget子类
例如，我们创建一个FavoriteWidget类，它是StatefulWidget的子类，可以改变状态的widget。

Widget的状态可以通过多种方式进行管理，但在我们的示例中，widget本身（FavoriteWidget）将管理自己的状态。

FavoriteWidget类管理自己的状态，因此它重写createState()来创建状态对象。 框架会在构建widget时调用createState()。在这个例子中，createState()创建_FavoriteWidgetState的实例，您将在下一步中实现该实例。

```dart
class FavoriteWidget extends StatefulWidget {
  @override
  _FavoriteWidgetState createState() => new _FavoriteWidgetState();
}
```

* 创建State子类
接下来我们创建State子类：_FavoriteWidgetState。

自定义State类存储可变信息 —— 可以在widget的生命周期内改变逻辑和内部状态。

状态对象也定义了build方法，它返回我们要显示的widget对象。本例中，widget使用IconButton（而不是Icon）， 因为它具有一个onPressed属性，该属性定义了处理点击的回调方法。IconButton也有一个icon的属性，持有Icon。

按下IconButton时会调用_toggleFavorite()方法，然后它会调用setState()。 调用setState()是至关重要的，因为这告诉框架，widget的状态已经改变，应该重绘。 _toggleFavorite在: 1）实心的星形图标和数字“41” 和 2）虚心的星形图标和数字“40”之间切换UI。

```dart
class _FavoriteWidgetState extends State<FavoriteWidget> {
  bool _isFavorited = true;
  int _favoriteCount = 41;

  void _toggleFavorite() {
    setState(() {
      // If the lake is currently favorited, unfavorite it.
      if (_isFavorited) {
        _favoriteCount -= 1;
        _isFavorited = false;
        // Otherwise, favorite it.
      } else {
        _favoriteCount += 1;
        _isFavorited = true;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        new Container(
          padding: new EdgeInsets.all(0.0),
          child: new IconButton(
            icon: (_isFavorited
                ? new Icon(Icons.star)
                : new Icon(Icons.star_border)),
            color: Colors.red[500],
            onPressed: _toggleFavorite,
          ),
        ),
        new SizedBox(
          width: 18.0,
          child: new Container(
            child: new Text('$_favoriteCount'),
          ),
        ),
      ],
    );
  }
}

```