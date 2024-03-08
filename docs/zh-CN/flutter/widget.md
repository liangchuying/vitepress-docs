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

