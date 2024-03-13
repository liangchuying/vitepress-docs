#### `全局的国际化配置`

```dart
两个插件配合使用
flutter pub add flutter_localizations --sdk=flutter // 需要根据sdk 版本去安装
 flutter pub add intl:any

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

#### DateTime日期转换的详细使用

1. 日期转换成时间戳
```dart
var now=new DateTime.now();
print(now.millisecondsSinceEpoch); //单位毫秒，13位时间戳
```

2. 时间戳转换成日期
```dart
var now=new DateTime.now();
var a=now.millisecondsSinceEpoch; // 时间戳*
print(DateTime.fromMillisecondsSinceEpoch(a));
```

3. 创建指定时间 
```dart
DateTime assignDay = new DateTime(2020,10,10);
print(assignDay);&nbsp; &nbsp;//&nbsp;2020-10-10 00:00:00.000
```

4. 计算时间跨度
```dart
// 例如计算1天14小时45分的跨度
Duration timeRemaining = new Duration(days:1, hours:14, minutes:45);
print(timeRemaining);  // 38:45:00.000000
```

5. 字符串转DateTime
```dart
DateTime.parse('2019-11-08') 
//或者&nbsp;
DateTime.parse('2019-11-08 12:30:05')
```

6. 在之前——时间比较
```dart
var today = DateTime.now();
var date = DateTime.parse("2019-06-20 15:32:41");
today.isBefore(date);
```

7. 在之后——时间比较
```dart
var today = DateTime.now();
var date =&nbsp;DateTime.parse("2019-06-20 15:32:41");
today.isAfter(date);
```

8. 相等——时间比较
```dart
var today = DateTime.now();
var date =&nbsp;DateTime.parse("2019-06-20 15:32:41");
today.isAtSameMomentAs(date);
```

9. 时间增加
```dart
var today = DateTime.now();   // 2019-11-08 02:54:53.218443
var fiftyDaysFromNow = today.add(new Duration(days: 5));
print('today加5天：$fiftyDaysFromNow');  // today加5天：2019-11-13 02:54:53.218443
```

10. 时间减少
```dart
var today = DateTime.now();   // 2019-11-08 02:54:53.218443
var fiftyDaysAgo = today.add(new Duration(days: 5));
print('today加5天：$fiftyDaysAgo ');  // today减5天：2019-11-03 02:54:53.218443
```

11. 时间差(小时数)
```dart
var day1 = new DateTime(2019, 6, 20, 17, 30, 20);
var day2 = new DateTime(2019, 7, 21, 0,  0, 0);
print('比较两个时间 差 小时数：${day1.difference(day2)}');  //  比较两个时间 差 小时数：-726:29:40.000000
```

12. 获取年、月、日、星期、时、分、秒、毫秒、微妙
```dart
year、month、day、weekday、hour、minute、second、millisecond、microsecond
var today = DateTime.now();
print(today.year);
```

13. 获取本地时区简码
```dart
DateTime today = DateTime.now();
print('本地时区简码：${today.timeZoneName}');  //  本地时区简码：GMT
```

14. 返回UTC与本地时差（小时数）
```dart
DateTime today = DateTime.now();
print('返回UTC与本地时差 小时数：${today.timeZoneOffset}');
```