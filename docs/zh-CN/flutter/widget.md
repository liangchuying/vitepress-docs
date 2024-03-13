常用的widget

* GestureDetector 手势

|   字段      |     属性      |   描述    |
| ---------- | --------- | ---------- |
|onTapDown  | ----------  | 按下时回调  |
|  onTapUp  | ----------  | 抬起时回调  |
|  onTap  | ----------  | 点击事件回调  |
|  onTapCancel | ----------  | 点击取消事件回调  |
|  onDoubleTapDown | ----------  | 短时间内双击按下时回调  |
|  onDoubleTap | ----------  | 短时间内双击回调  |
|  onDoubleTapCancel | ----------  | 短时间内双击取消事件回调  |
|  onLongPress | ----------  | 长按事件回调  |
|  onLongPressStart | ----------  | 长按开始事件回调  |
|  onLongPressMoveUpdate  | ----------  | 长按移动事件回调  |
|  onLongPressUp | ----------  | 长按抬起事件回调  |
|  onLongPressEnd  | ----------  | 长按结束事件回调  |
|  onVerticalDragDown | ----------  | 垂直滑动按下事件回调  |
|  onVerticalDragStart | ----------  | 垂直滑动开始事件回调  |
|  onVerticalDragUpdate | ----------  | 垂直滑动更新事件回调  |
|  onVerticalDragEnd  | ----------  | 垂直滑动结束事件回调  |
|  onVerticalDragCancel  | ----------  | 垂直滑动取消事件回调  |
|  onHorizontalDragDown  | ----------  | 水平滑动按下事件回调  |
|  onHorizontalDragStart  | ----------  | 水平滑动开始事件回调  |
|  onHorizontalDragUpdate  | ----------  | 水平滑动更新事件回调  |
|  onHorizontalDragEnd  | ----------  | 水平滑动结束事件回调  |
|  onHorizontalDragCancel  | ----------  | 水平滑动取消事件回调  |
|  onPanDown  | ----------  | 按压时回调（我自己理解为点击事件，但是比onTap优先级高，onPan先执行先取消,onPan比onTap多个滑动监听）  |
|  onPanStart  | ----------  | 按压拖动开始回调,按压开始，不能与 onScale ，onVerticalDrag，onHorizontalDrag，同时使用 onPanUpdate 按压拖动回调 onPanEnd 按压拖动结束回调  |
|  onPanCancel  | ----------  | 按压拖动取消回调  |
|  onScaleStart  | ----------  | 缩放开始事件回调缩放开始，不能与 onPan ，onVerticalDrag，onHorizontalDrag，同时使用  |
|  onScaleUpdate  | ----------  | 缩放更新事件回调  |
|  onScaleEnd  | ----------  | 缩放结束事件回调  |
|  behavior  | ----------  | 手势检测器在触摸中应该如何工作  |
|  HitTestBehavior.deferToChild: | ----------  | 只有当前容器中的child被点击时才会响应点击事件  |
|  HitTestBehavior.opaque: | ----------  | 点击整个区域都会响应点击事件，但是点击事件不可穿透向下传递，注释翻译：阻止视觉上位于其后方的目标接收事件  |
|  HitTestBehavior.translucent: | ----------  | 同样是点击整个区域都会响应点击事件，和opaque的区别是点击事件是否可以向下传递，注释翻译：半透明目标既可以在其范围内接受事件，也可以允许视觉上位于其后方的目标接收事件  |

#### 一些触摸事件，监听的调用顺序
* 点击屏幕：onPanDown--onPanCancel--onTapDown--onTapUp--onTap

* 点击滑动：onPanDown--onTapDown--onTapCancel--onPanStart--onPanUpdate--onPanEnd

* 双击屏幕：onPanDown--onPanCancel--onDoubleTapDown--onPanDown--onPanCancel--onDoubleTap

* 长按屏幕：onPanDown--onTapDown--onTapCancel--onPanCancel--onLongPressStart--onLongPress--onLongPressMoveUpdate--onLongPressEnd--onLongPressUp

* 手指左右滑动：onVerticalDragDown--onHorizontalDragDown--onVerticalDragCancel--onHorizontalDragStart--onHorizontalDragUpdate--onHorizontalDragEnd

* 手指上下滑动：onVerticalDragDown--onHorizontalDragDown--onHorizontalDragCancel--onVerticalDragStart--onVerticalDragUpdate--onVerticalDragEnd

* 缩放：onScaleStart--onScaleUpdate--onScaleEnd

#### Flutter手势操作 —全局坐标与局部坐标的获取
全局坐标与局部坐标

在GestureDetector中有两个重要属性值globalPosition和localPosition，两者都是Offset对象。
globalPosition就像它的命名表示当前手势触点在**全局坐标系位置与对应组件顶点坐标的偏移量（dx，dy）；
localPosition则就表示当前手势触点在对应组件坐标系位置与对应组件顶点坐标的偏移量（dx，dy）**。

::: info 

例如如下代码中，为Container设置了GestureDetector手势监听，在update回调中获取updateDetail对象，在Text中显示globalPosition偏移量。从中获取到的globalPosition和localPosition中dx的值相同，dy却不同。也就是因为Scaffold中设置了AppBar，相对于body他的全局坐标系并非它自身。但若将Scaffold中的AppBar去除，让body撑满整个Scaffold，那么在手势监听中获取到的globalPosition和localPosition偏移量将相同。

需要注意的是对于globalPosition在安卓中还包含了手机状态栏的高度。
:::

#### 通过DRAGUPDATEDETAILS获取全局坐标和局部坐标
`DragUpdateDetails` 相当网页前端的Evnet事件，可以获取当前触摸点的全局坐标和局部坐标。

```dart
  onPanUpdate: (DragUpdateDetails detail) {   
    //获取当前触摸点的全局坐标
    var globalPosition=detail.globalPosition;
    //获取当前触摸点的局部坐标
    var localPosition=detail.localPosition;
   }
```

#### 通过CONTEXNT.FINDRENDEROBJECT()获取全局坐标和局部坐标
当前的页面结构(PainterPage)：

``` dart

onPanUpdate:(detail){
  final RenderBox Box = context.findRenderObject();   // 获取的对象为当前页面对象，PainterPage
  Offset localPosition = Box.globalToLocal(detail.globalPosition);			// 转换为局部坐标但实际是全局坐标
  Offset globalPosition = Box.localToGlobal(detail.globalPosition);			// 获得的是全局坐标。
}

```
#### bottomNavigationBar 突起效果

```dart
 floatingActionButton: FloatingActionButton(
    child: Icon(Icons.add),
    shape: CircleBorder(),
    backgroundColor: Colors.blue,
    foregroundColor:  Colors.white,
    onPressed: () {
      print('处理事件');
    },
  ),
  floatingActionButtonAnimator: FloatingActionButtonAnimator.scaling,
  floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
  bottomNavigationBar: BottomAppBar(
    shape: const CircularNotchedRectangle(),
    // notchMargin: 6.0,
    color: Colors.white,
    child: Row(
      mainAxisSize: MainAxisSize.max,
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [],
    ),
  ),
```


#### TabBar 的使用

|   字段      | 属性        |    描述  |
| ----------- | ---------- | ---------- |
| controller | 	TabController | 控制tab的控制器 |
| isScrollable | bool | 是否可滚动 |
| indicatorColor | Color | 指示器颜色 |
| indicatorWeight | double | 指示器的高度 |
| indicatorPadding | EdgeInsetsGeometry | 底部指示器的Padding |
| indicator | Decoration | 指示器decoration，例如边框、颜色等 |
| indicatorSize | TabBarIndicatorSize | 指示器大小计算方式,label 为以文本为边框计算，tab 为以指示器为边框计算 |
| labelColor | Color | /tab 标签颜色 |
| labelStyle | TextStyle | 设置标签样式 |
| unselectedLabelColor | Color | 未选中Tab中文字颜色 |
| unselectedLabelStyle | TextStyle | 未选中Tab中文字style |

``` dart

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('TabBarView Demo'),
        bottom: TabBar(
          tabs: mTab, //设置tabbar 的标签显示内容，一般使用Tab对象,当然也可以是其他的Widget
          controller: _tabController, //TabController对象
          isScrollable: true, //是否可滚动
          indicatorColor: Colors.lightBlueAccent, //指示器颜色
          indicatorWeight: 10.0, //指示器的高度
          indicatorPadding: EdgeInsets.all(10), //底部指示器的Padding
          indicator: BoxDecoration(
              border: Border.all(
                  width: 1, color: Colors.black)), //指示器decoration，例如边框、颜色等
          indicatorSize: TabBarIndicatorSize
              .tab, //指示器大小计算方式,label 为以文本为边框计算，tab 为以指示器为边框计算
          labelColor: Colors.yellowAccent, //tab 标签颜色
          labelStyle: TextStyle(color: Colors.black, fontSize: 20), //设置标签样式
          unselectedLabelColor: Colors.redAccent, //未选中Tab中文字颜色
          unselectedLabelStyle:
              TextStyle(color: Colors.red, fontSize: 25), //未选中Tab中文字style
        ),
        //tab 文字样式
      ),
      body: TabBarView(
          children: mTabView, //一系列子控件，如果和TabBar一起使用注意和TabBar的长度一样
          controller:
              _tabController, //控制器，如果和TabBar一起使用注意和TabBar使用同一个controller
          physics: ScrollPhysics()), //??
      drawerDragStartBehavior: DragStartBehavior.start, //?
    );
  }

```
