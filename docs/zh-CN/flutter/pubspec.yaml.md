// 应用名称
name: flutter_application_1
// 应用描述
description: A new Flutter project.
# The following line prevents the package from being accidentally published to
# pub.dev using `flutter pub publish`. This is preferred for private packages.
publish_to: 'none' 
# Remove this line if you wish to publish to pub.dev

// 版本号，区分Andriod和Ios
// +号前，对应andriod的versionName,Ios的CFBundleShortVersionString
// +号前，对应andriod的versionCode,IOS的CFBundleVersion
version: 1.0.0+1

// 编译要求的dart版本号区间
environment:
  sdk: '>=2.19.6 <3.0.0'

// 插件库
dependencies:
  flutter:
    sdk: flutter


  # The following adds the Cupertino Icons font to your application.
  # Use with the CupertinoIcons class for iOS style icons.
  // 引入插件库
  cupertino_icons: ^1.0.2

dev_dependencies:
  flutter_test:
    sdk: flutter

  flutter_lints: ^2.0.0

flutter:
// 使用Material分格的图标和文字
  uses-material-design: true

  # To add assets to your application, add an assets section, like this:
  // 引入图标
  assets:
    # - images/a_dot_burr.jpeg
    # - images/a_dot_ham.jpeg
     - images/logo.png


