#### 全局的国际化配置

```dart
flutter_localizations 插件
import 'package:flutter_localizations/flutter_localizations.dart';

localizationsDelegates: [
    GlobalMaterialLocalizations.delegate, // 指定本地化的字符串和一些其他的值
    GlobalCupertinoLocalizations.delegate, // 对应的Cupertino风格
    GlobalWidgetsLocalizations.delegate // 指定默认的文本排列方向, 由左到右或由右到左
],
supportedLocales:[
    const Locale('zh','CH'),
    const Locale('en','US'),
]
```