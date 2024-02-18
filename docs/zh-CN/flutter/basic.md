# Flutter 常用指令

```dart
1.flutter -h/–help/ help 查看帮助
flutter devices 查看设备列表
flutter doctor 查看当前配置粗略情况
flutter upgrade 升级flutter
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