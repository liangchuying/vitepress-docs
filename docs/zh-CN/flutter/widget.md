常用的widget

* GestureDetector 手势

|   字段      |     属性      |   描述    |
| ---------- | --------- | ---------- |
|  onTapDown  | ----------  | 按下时回调  |
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

 TabBar TabBar({
  Key? key,
  required List<Widget> tabs,    // tab组件集合，一般使用Tab对象,也可以是其他的Widget
  TabController? controller,    //TabController对象
  bool isScrollable = false,    //是否可滚动
  EdgeInsetsGeometry? padding,    //设置选中Tab指示器间距，默认值为 EdgeInsets.zero
  Color? indicatorColor,    //指示器颜色
  bool automaticIndicatorColorAdjustment = true,    //是否自动调整indicatorColor
  double indicatorWeight = 2.0,    //指示器高度
  EdgeInsetsGeometry indicatorPadding = EdgeInsets.zero,  //底部指示器的Padding
  Decoration? indicator,    //指示器decoration，例如边框等
  TabBarIndicatorSize? indicatorSize,  //指示器大小，TabBarIndicatorSize.label 跟文字等宽,TabBarIndicatorSize.tab 跟每个tab等宽
  Color? dividerColor,   // 分隔符颜色
  Color? labelColor,      //选中label颜色
  TextStyle? labelStyle,    //选中label的Style
  EdgeInsetsGeometry? labelPadding,    //每个label的padding值
  Color? unselectedLabelColor,    //未选中label颜色
  TextStyle? unselectedLabelStyle,    //未选中label的Style
  DragStartBehavior dragStartBehavior = DragStartBehavior.start,    //处理拖动开始行为的方式
  MaterialStateProperty<Color?>? overlayColor,    //定义响应焦点、悬停和飞溅颜色
  MouseCursor? mouseCursor,    //鼠标指针进入或悬停在鼠标指针上时的光标
  bool? enableFeedback,    //检测到的手势是否应提供声音和/或触觉反馈
  void Function(int)? onTap,    //单击Tab时的回调
  ScrollPhysics? physics,    //TabBar的滚动视图如何响应用户输入
  InteractiveInkFeatureFactory? splashFactory, // 水波纹效果
  BorderRadius? splashBorderRadius,  // 水波纹Radius
})
```

#### CupertinoDatePicker 

```dart

late DateTime dateTimer;
Text("查看选择的时间: ${dateTimer}")
// widget
CupertinoDatePicker(
  backgroundColor: Colors.indigo, //背景颜色
  use24hFormat: true, //使用24小时制

  initialDateTime: DateTime.now(), // 默认时间
  //日期的限制
  maximumYear: 2025,
  minimumYear: 2021,
  minimumDate: DateTime.now()
      .add(const Duration(days: -1)), //最小数值date
  maximumDate: DateTime.now()
      .add(const Duration(days: 3)), //3天后的日期
  onDateTimeChanged: (sd) {
    print(sd);
    setState(() {
      dateTimer = sd;
    });
  }
);

```


#### CupertinoTimerPicker
```dart

CupertinoTimerPicker(
  mode: CupertinoTimerPickerMode.hms, //模式可以值选择时和分，或者加秒
  minuteInterval: 1, //最小的分钟间隔
  //设置默认的时间，路由自己设置或者是可以设置为当前数据的时分秒
  initialTimerDuration:
      Duration(hours: 2, minutes: 10, seconds: 54),
  onTimerDurationChanged: (stime) {
    print("$stime");
    setState(() {
      selectTimeStr2 = "$stime";
    });
  },
);

```

#### Icon 使用

| 字段 | 属性 | 说明 |
| ---- | ---- | ---- |
|  IconData |icon	| icon数据，可使用Icons.home方式获取，也可以使用IconData(0xe577, fontFamily: ‘MaterialIcons’) |
|  double |size	| 图标大小，默认24.0 |
|  Color |color	| 图标颜色 |
|  String |semanticLabel	| 语义标签 |
|  TextDirection |textDirection	| 图标的文本方向 |

### 用户滚动操作

```dart
  AlwaysScrollableScrollPhysics：总是可以滑动
  NeverScrollableScrollPhysics：禁止滚动
  BouncingScrollPhysics ：内容超过一屏 上拉有回弹效果
  ClampingScrollPhysics ：包裹内容 不会有回弹
```

#### NestedScrollView widget
NestedScrollView：支持嵌套滑动的ScrollView；
| 属性  |  说明  | 默认值 |
| ----- | ----- | ----- |
|  controller |	滚动监听 |	无 |
|  scrollDirection |	滚动方向 |	Axis.vertical 默认垂直方向 |
|  reverse |	是都倒叙 |	false 默认值 |
|  physics |	控制用户滚动视图的交互 | `AlwaysScrollableScrollPhysics,总是可以滑动。` `NeverScrollableScrollPhysics,禁止滚动。` `BouncingScrollPhysics，内容超过一屏上拉有回弹效果。`, `ClampingScrollPhysics，包裹内容不会有回弹。` |
|  headerSliverBuilder |	折叠头部 |	无 |
|  body |	滚动组件实体 |	无 |

NestedScrollView折叠部分使用SliverAppBar来实现

NestedScrollView 进行吸顶效果, body 被覆盖，无法预计顶部head的高度？

![NestedScrollView](/Flutter/widget/NestedScrollView.webp)

所以我们使用“SliverOverlapAbsorber+ SliverOverlapInjector”来解决问题
#### SliverAppBar 使用

```dart

NestedScrollView(
    controller: _scrollController,
    headerSliverBuilder: _headerSliverBuilder,
    body: buildSliverBody(context)
)
///页面滚动头部处理
List<Widget> _headerSliverBuilder(BuildContext context, bool innerBoxIsScrolled) {
  return <Widget> [
    buildSliverAppBar(context)
  ];
}
///导航部分渲染
Widget buildSliverAppBar(BuildContext context) {
  return SliverAppBar(
    //当此值为true时 SliverAppBar 会固定在页面顶部
    //当此值为fase时 SliverAppBar 会随着滑动向上滑动
    pinned: true,
    //滚动是是否拉伸图片
    stretch: true,
    //展开区域的高度
    expandedHeight: 500,
    //当snap配置为true时，向下滑动页面，SliverAppBar（以及其中配置的flexibleSpace内容）会立即显示出来，
    //反之当snap配置为false时，向下滑动时，只有当ListView的数据滑动到顶部时，SliverAppBar才会下拉显示出来。
    snap: false,
    //阴影
    elevation: 0,
    //背景颜色
    backgroundColor: headerWhite? Colors.white : Color(0xFFF4F5F7),
    //App bar 的亮度，有白色和黑色两种主题，默认值为 ThemeData.primaryColorBrightness
    brightness: Brightness.light,
    //在标题左侧显示的一个控件，在首页通常显示应用的 logo；在其他界面通常显示为返回按钮
    leading: IconButton(
        icon: Image.network(backIcon, height: 22, width: 22,),
        onPressed: (){
          //TODO: 返回事件处理
        }
    ),
		//一个显示在 AppBar 下方的控件，高度和 AppBar 高度一样， // 可以实现一些特殊的效果，该属性通常在 SliverAppBar 中使用
    flexibleSpace: FlexibleSpaceBar(
      title: headerWhite ? Text('长津湖', style: TextStyle(
          color: Color(0xFF333333),
          fontWeight: FontWeight.w700,
          fontSize: 17,
          fontFamily: 'PingFangSC-Semibold'
      ),) : Text(''),
      //标题居中
      centerTitle: true,
      background: buildAppBarBackground(context),
    ),
  );
}


const SliverAppBar({
  Key key,
  this.leading,         //在标题左侧显示的一个控件，在首页通常显示应用的 logo；在其他界面通常显示为返回按钮
  this.automaticallyImplyLeading = true,//? 控制是否应该尝试暗示前导小部件为null
  this.title,               //当前界面的标题文字
  this.actions,          //一个 Widget 列表，代表 Toolbar 中所显示的菜单，对于常用的菜单，通常使用 IconButton 来表示；对于不常用的菜单通常使用 PopupMenuButton 来显示为三个点，点击后弹出二级菜单
  this.flexibleSpace,        //一个显示在 AppBar 下方的控件，高度和 AppBar 高度一样， // 可以实现一些特殊的效果，该属性通常在 SliverAppBar 中使用
  this.bottom,         //一个 AppBarBottomWidget 对象，通常是 TabBar。用来在 Toolbar 标题下面显示一个 Tab 导航栏
  this.elevation,            //阴影
  this.forceElevated = false, 
  this.backgroundColor,       //APP bar 的颜色，默认值为 ThemeData.primaryColor。改值通常和下面的三个属性一起使用
  this.brightness,   //App bar 的亮度，有白色和黑色两种主题，默认值为 ThemeData.primaryColorBrightness
  this.iconTheme,  //App bar 上图标的颜色、透明度、和尺寸信息。默认值为 ThemeData().primaryIconTheme
  this.textTheme,    //App bar 上的文字主题。默认值为 ThemeData（）.primaryTextTheme
  this.primary = true,  //此应用栏是否显示在屏幕顶部
  this.centerTitle,     //标题是否居中显示，默认值根据不同的操作系统，显示方式不一样,true居中 false居左
  this.titleSpacing = NavigationToolbar.kMiddleSpacing,//横轴上标题内容 周围的间距
  this.expandedHeight,     //展开高度
  this.floating = false,       //是否随着滑动隐藏标题
  this.pinned = false,  //是否固定在顶部
  this.snap = false,   //与floating结合使用
})
```