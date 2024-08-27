# Flutter 常用指令

```dart
1.flutter -h/–help/ help 查看帮助
flutter devices 查看设备列表
flutter doctor 查看当前配置粗略情况
flutter upgrade 升级flutter

flutter packages upgrade”命令，这将自动更新所有依赖项到最新版本。
flutter pub upgrade更新package包版本

flutter build apk/ios 打包项目，生成可安装文件
flutter packages get/upgrade 获取或升级依赖
flutter analyze 使用分析器检查代码是否存在问题
flutter config 配置信息相关操作
flutter clean 清空缓存
flutter version 查看flutter版本 加上版本名称 则进行切换

                        
运行项目   
--v 查看APP所有日志的输出
--release/--debug/--profile/--test 分别是以release/debug/profile/test模式运行
--hot 热重载方式启动 方便调试 
	1) r 热重载(重载，程序中发生改变的state无法重置) 
	2) R (shift+r)热重启(重新启动APP，程序中的state等全部重置)  
		R和r的区别演示：默认程序计数器，点击数字变大，使用r热重载，数字不会重置
				      使用R热重启 则数字重置
	3) h 查看更多帮助
	4) d 结束终端，但不结束程序
	5) c 清空屏幕，但其实只是跳到底部 让你看不到上面的内容而已
	6) o 切换安卓和IOS的显示模式
	7) p 切换模式 Widget会有线条作基准 方便布局
	8) q 退出程序以及终端
```

##### android 常用快捷键

*	Option + Enter ：在widget包裹一个新的widget。
*	Option + Up ：选择这个widget。
*	Option + Enter ：自动修正错误（但是要把光标移动到错误上面）。
*	Command + “-” 或者 “+” ：收起和展开代码。
*	Command + Shift + “-” 或者 “+” ： 收起和展开全部代码。
*	Option + Command + M ：方法抽离或重构。
*	Command + Shift + Enter ：代码快速补全。
*	Option + Command + V ： 抽离局部变量。
*	Option + Command + F ：抽离成员变量。
*	Command + Option + L ： 代码格式化。
*	Command + F12 ：快速查看当前文件所有方法。
*	Command + shift + F ：全局搜索。
*	Command + shift + R ：全局替换。
*	Command + F ：当前文件搜索。
*	Command + R ：当前文件替换。
