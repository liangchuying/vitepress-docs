### GET  高性能的状态管理、智能的依赖注入和便捷的路由管理。

#### Get 以来注入
* Get.put() 不使用控制器实例也会被创建 
* Get.lazyPut() 懒加载方式创建实例，只有在使用时才创建
* Get.putAsync() `Get.put()`的异步版版本
* Get.create()  每次使用都会创建一个新的实例

#### Getx Binding

#### 声明需要进行的绑定控制器
``` dart

//在同一个控制器中将所有的控制器全部进行初始化.因为使用的是lazyPut懒加载,所以再没有使用到的时候并不会进行初始化的.
class AllControllerBinding implements Bindings {
  
  @override
  void dependencies() {
    // TODO: implement dependencies
    Get.lazyPut<BindingMyController>(() => BindingMyController());
    Get.lazyPut<BindingHomeController>(() => BindingHomeController());
  }
}
 
 
home.dart
import 'package:get/get.dart';
 
//第一个控制器
class BindingHomeController extends GetxController {
  var count = 0.obs;
  void increment() {
    count++;
  }
}
 
mine.dart 
import 'package:get/get.dart';
 
//第二个控制器
class BindingMyController extends GetxController {
  var count = 0.obs;
  void increment() {
    count++;
  }
}
```

#### Get 路由管理

* 动态路由

``` dart
 GetMaterialApp(
    initialRoute: '/',
    getPages: [
    GetPage(
      name: '/',
      page: () => MyHomePage(),
    ),
    GetPage(
      name: '/profile/', // 没值匹配就写 / 在后面
      page: () => MyProfile(),
    ),
    GetPage(
      name: '/profile/:user', // 如果有值 /:xxx 在后面
      page: () => UserProfile(),
    ),
    GetPage(
      name: '/third',
      page: () => Third(),
      transition: Transition.cupertino  
    ),
    ],
  )
```

#### Get 中间件

* routingCallback 

```dart
GetMaterialApp(
  routingCallback: (routing) {
    if(routing.current == '/user') {
      openAds();
    }
  }
)
```

#### GetMaterialApp的常用配置

```dart

void main() {
  runApp(
    GetMaterialApp(
      // 初始路径
      initialRoute: '/',
      
      // 404页面
      unknownRoute: GetPage(name: '/notfound', page: () => UnknownRoutePage()),

      // 中间件
      routingCallback: (routing) {
        if(routing.current == '/user') {
          openAds();
        }
      },
      
      // 路由配置表
      getPages: [
        GetPage(name: '/', page: () => MyHomePage()),
        GetPage(name: '/second', page: () => Second(),  binding: SecondBinding()),
      ],
    )
  );
}

```



#### Getx常用的功能组件

* SnackBars

```dart
Get.snackbar('Hi', 'i am a modern snackbar');

// 定制你的需求，随处可使用
Get.snackbar(
  "Hey i'm a Get SnackBar!", // title
  "It's unbelievable! I'm using SnackBar without context, without boilerplate, without Scaffold, it is something truly amazing!", // message
  icon: Icon(Icons.alarm),
  shouldIconPulse: true,
  onTap:(){},
  barBlur: 20,
  isDismissible: true,
  duration: Duration(seconds: 3),
);
```
属性以及说明: 

| 字段 | 属性 | 描述 |
| ---------- | ---------- | ---------- |
|  title | String | 弹出的标题文字 |
|  message| String | 弹出的消息文字 |
|  colorText | Color | title和message的文字颜色|
|  duration | Duration | Snackbar弹出的持续时间（默认3秒）|
|  instantInit | bool | 当false可以把snackbar 放在initState，默认true |
|  snackPosition | SnackPosition| 弹出时的位置，有两个选项【TOP，BOTTOM】默认TOP |
|  titleText | Widget| 弹出标题的组件，设置该属性会导致title属性失效 |
|  messageText | Widget| 弹出消息的组件，设置该属性会导致messageText属性失效 |
|  icon | Widget | 弹出时图标，显示在title和message的左侧 |
|  shouldIconPulse | bool | 弹出时图标是否闪烁，默认false |
|  maxWidth | double | Snackbar最大的宽度 |
|  margin | EdgeInsets | Snackbar外边距，默认zero |
|  padding | EdgeInsets | Snackbar内边距，默认EdgeInsets.all(16) |
|  borderRadius | double | 边框圆角大小，默认15 |
|  borderColor | Color | 边框的颜色，必须设置borderWidth，否则无效果 |
|  borderWidth | double | 边框的线条宽度 |
|  backgroundColor| Color | Snackbar背景颜色，默认Colors.grey.withOpacity(0.2) |
|  leftBarIndicatorColor | Color | 左侧指示器的颜色|
|  boxShadows | List | Snackbar阴影颜色 |
|  backgroundGradient | Gradient | 背景的线性颜色 |
|  mainButton | TextButton | 主要按钮，一般显示发送、确认按钮 |
|  onTap | OnTap | 点击Snackbar事件回调 |
|  isDismissible | bool | 是否开启Snackbar手势关闭，可配合dismissDirection使用 |
|  showProgressIndicator | bool | 是否显示进度条指示器，默认false |
|  dismissDirection | SnackDismissDirection | Snackbar关闭的方向 |
|  progressIndicatorController | AnimationController | 进度条指示器的动画控制器 |
|  progressIndicatorBackgroundColor | Color | 进度条指示器的背景颜色 |
|  progressIndicatorValueColor | Animation | 进度条指示器的背景颜色，Animation |
|  snackStyle| SnackStyle | Snackbar是否会附加到屏幕边缘 |
|  forwardAnimationCurve | Curve | Snackbar弹出的动画，默认Curves.easeOutCirc |
|  reverseAnimationCurve | Curve | Snackbar消失的动画，默认Curves.easeOutCirc |
|  animationDuration | Duration | Snackbar弹出和小时的动画时长，默认1秒|
|  barBlur | double | Snackbar背景的模糊度 |
|  overlayBlur | double | 弹出时的毛玻璃效果值，默认0 |
|  snackbarStatus | SnackbarStatusCallback| Snackbar弹出或消失时的事件回调（即将打开、已打开、即将关闭、已关闭）|
|  overlayColor | Color | 弹出时的毛玻璃的背景颜色 |
|  userInputForm | Form | 用户输入表单 |

* Dialog

```dart
ElevatedButton(
  onPressed: () {
    Get.defaultDialog(
        title: "提示信息",
        middleText: "你确定删除吗",
        confirm: ElevatedButton(
            onPressed: () {
              print("确定");
              Get.back(); //返回
            },
            child: const Text("确定")),
        cancel: ElevatedButton(
            onPressed: () {
              print("取消");
              Get.back(); //返回
            },
            child: const Text("取消")));
  },
  child: const Text("Getx defaultDialog")
)

```
属性以及说明

|	字段|	属性 |	描述 |
| ---------- | ---------- | ---------- |
| title|	String |	弹出的标题，默认（Alert） |
| titlePadding |	EdgeInsetsGeometry |	标题的内边距，默认（EdgeInsets.all(8)）|
| titleStyle |	TextStyle |	标题的样式 |
| middleText |	String |	中间内容区域显示的文字 |
| middleTextStyle |	TextStyle |	中间内容区域显示的文字样式 |
| content|	Widget |	弹出的内容，该值设置后middleText将无效 |
| contentPadding |	EdgeInsetsGeometry |	内容的内边距，默认（EdgeInsets.all(8)）|
| onConfirm |	VoidCallback |	确认按钮回调 |
| onCancel |	VoidCallback |	取消按钮回调 |
| onCustom |	VoidCallback |	自定义按钮回调 |
| cancelTextColor |	Color |	取消按钮文字的颜色 |
| confirmTextColor |	Color |	确认按钮文字的颜色 |
| textConfirm |	String |	确认按钮的文字 |
| textCancel |	String |	取消按钮的文字 |
| textCustom |	String |	自定义按钮的文 |
| confirm |	Widget |	确认按钮的组件 |
| cancel |	Widget |	取消按钮的组件 |
| custom |	Widget |	自定义按钮的组件 |
| backgroundColor |	Color |	弹出框的背景颜色 |
| barrierDismissible |	bool |	是否可以通过点击背景关闭弹窗 |
| buttonColor |	Color |	按钮的文字颜色，根据按钮类型来设定不同的位置 |
| radius |	double |	弹出框的圆角大小，默认20 |
| actions |	List |	增加额外的子组件 |
| onWillPop |	WillPopCallback |	拦截关闭之前做一些操作 |
| navigatorKey |	GlobalKey |	用于打开对话框的key |
                        
原文链接：https://blog.csdn.net/eastWind1101/article/details/127996254
* BottomSheets

```dart
Get.bottomSheet(
  Container(
    child: Wrap(
      children: <Widget>[
        ListTile(
          leading: Icon(Icons.music_note),
          title: Text('Music'),
          onTap: () {}
        ),
        ListTile(
          leading: Icon(Icons.videocam),
          title: Text('Video'),
          onTap: () {},
        ),
      ],
    ),
  )
);
```

#### Get提供的工具类：GetUtils
```dart

GetUtils.isEmail('xxx')
GetUtils.isPhoneNumber('xxx')
GetUtils.isImage('xxx')
......

看Get源码，有更多其他的方法

```
#### 其他高级API
```dart
// 给出当前页面的args。
Get.arguments

//给出以前的路由名称
Get.previousRoute

// 给出要访问的原始路由，例如，rawRoute.isFirst()
Get.rawRoute

// 允许从GetObserver访问Rounting API。
Get.routing

// 检查 snackbar 是否打开
Get.isSnackbarOpen

// 检查 dialog 是否打开
Get.isDialogOpen

// 检查 bottomsheet 是否打开
Get.isBottomSheetOpen

// 删除一个路由。
Get.removeRoute()

//反复返回，直到表达式返回真。
Get.until()

// 转到下一条路由，并删除所有之前的路由，直到表达式返回true。
Get.offUntil()

// 转到下一个命名的路由，并删除所有之前的路由，直到表达式返回true。
Get.offNamedUntil()

//检查应用程序在哪个平台上运行。
GetPlatform.isAndroid
GetPlatform.isIOS
GetPlatform.isMacOS
GetPlatform.isWindows
GetPlatform.isLinux
GetPlatform.isFuchsia

//检查设备类型
GetPlatform.isMobile
GetPlatform.isDesktop
//所有平台都是独立支持web的!
//你可以知道你是否在浏览器内运行。
//在Windows、iOS、OSX、Android等系统上。
GetPlatform.isWeb


// 相当于.MediaQuery.of(context).size.height,
//但不可改变。
Get.height
Get.width

// 提供当前上下文。
Get.context

// 在你的代码中的任何地方，在前台提供 snackbar/dialog/bottomsheet 的上下文。
Get.contextOverlay

// 注意：以下方法是对上下文的扩展。
// 因为在你的UI的任何地方都可以访问上下文，你可以在UI代码的任何地方使用它。

// 如果你需要一个可改变的高度/宽度（如桌面或浏览器窗口可以缩放），你将需要使用上下文。
context.width
context.height

// 让您可以定义一半的页面、三分之一的页面等。
// 对响应式应用很有用。
// 参数： dividedBy (double) 可选 - 默认值：1
// 参数： reducedBy (double) 可选 - 默认值：0。
context.heightTransformer()
context.widthTransformer()

/// 类似于 MediaQuery.of(context).size。
context.mediaQuerySize()

/// 类似于 MediaQuery.of(context).padding。
context.mediaQueryPadding()

/// 类似于 MediaQuery.of(context).viewPadding。
context.mediaQueryViewPadding()

/// 类似于 MediaQuery.of(context).viewInsets。
context.mediaQueryViewInsets()

/// 类似于 MediaQuery.of(context).orientation;
context.orientation()

///检查设备是否处于横向模式
context.isLandscape()

///检查设备是否处于纵向模式。
context.isPortrait()

///类似于MediaQuery.of(context).devicePixelRatio。
context.devicePixelRatio()

///类似于MediaQuery.of(context).textScaleFactor。
context.textScaleFactor()

///查询设备最短边。
context.mediaQueryShortestSide()

///如果宽度大于800，则为真。
context.showNavbar()

///如果最短边小于600p，则为真。
context.isPhone()

///如果最短边大于600p，则为真。
context.isSmallTablet()

///如果最短边大于720p，则为真。
context.isLargeTablet()

///如果当前设备是平板电脑，则为真
context.isTablet()

///根据页面大小返回一个值<T>。
///可以给值为：
///watch：如果最短边小于300
///mobile：如果最短边小于600
///tablet：如果最短边（shortestSide）小于1200
///desktop：如果宽度大于1200
context.responsiveValue<T>()
```
