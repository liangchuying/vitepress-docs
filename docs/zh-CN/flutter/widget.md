常用的widget

* GestureDetector 手势



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
