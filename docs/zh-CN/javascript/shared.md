# 信息隐藏
```js
/**
 * 只隐藏姓名中间的字
 * @param {data} 传入数据
 * 格式：张*三
 */
const hideCenterName = (name) => {
  let newStr;
  if (name.length === 2) {
    newStr = name.substr(0, 1) + '*';
  } else if (name.length > 2) {
    let char = '';
    for (let i = 0, len = name.length - 2; i < len; i++) {
      char += '*';
    }
    newStr = name.substr(0, 1) + char + name.substr(-1, 1);
  } else {
    newStr = name;
  }
  return newStr;
}
 
 
/**
 * 只显示姓氏
 * @param {data} 传入数据
 * 格式：张**
 */
const showFirstName = (name) => {
  let newStr;
  if (name.length === 2) {
    newStr = name.substr(0, 1) + '*';
  } else if (name.length > 2) {
    let char = '';
    for (let i = 0, len = name.length - 1; i < len; i++) {
      char += '*';
    }
    newStr = name.substr(0, 1) + char;
  } else {
    newStr = name;
  }
  return newStr;
}
```

#### 常用函数
```js
// 非空判断
function Nonempty(v){
    switch (typeof v) {
        case 'undefined':
            return false;
        case 'string':
            if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return false;
            break;
        case 'boolean':
            if (!v) return false;
            break;
        case 'number':
            if (0 === v || isNaN(v)) return false;
            break;
        case 'object':
            if (null === v || v.length === 0) return false;
            for (var i in v) {
                return true;
            }
            return false;
        }
        return true;
}
```

``` js
// 输入正整数
function inputNumber (e) {
  let price = e.value;
  price = price.replace(/[^\d]/g, "");  //清除“数字”和“.”以外的字符
  if (price.indexOf(".") < 0 && price != "") {//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
      price = parseFloat(price);
  }
  e.value = price
}

```

```js
  // 后两位小数点过滤
  function handleInput(e) {
      // console.log(e)
      let price = e.value;
      price = price.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符
      price = price.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
      price = price.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
      price = price.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能输入两个小数
      if (price.indexOf(".") < 0 && price != "") {//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
          price = parseFloat(price);
      }
      e.value = price
  }
```
#### 身份证校验函数

```js

function testid(id) {
   // 1 "验证通过!", 0 //校验不通过 // id为身份证号码
    var format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
    //号码规则校验
    if(!format.test(id)){
      return {'status':0,'msg':'身份证号码不合规'};
    }
    //区位码校验
    //出生年月日校验  前正则限制起始年份为1900;
    var year = id.substr(6,4),//身份证年
      month = id.substr(10,2),//身份证月
      date = id.substr(12,2),//身份证日
      time = Date.parse(month+'-'+date+'-'+year),//身份证日期时间戳date
      now_time = Date.parse(new Date()),//当前时间戳
      dates = (new Date(year,month,0)).getDate();//身份证当月天数
    if(time>now_time||date>dates){
      return {'status':0,'msg':'出生日期不合规'}
    }
    //校验码判断
    var c = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2);  //系数
    var b = new Array('1','0','X','9','8','7','6','5','4','3','2'); //校验码对照表
    var id_array = id.split("");
    var sum = 0;
    for(var k=0;k<17;k++){
      sum+=parseInt(id_array[k])*parseInt(c[k]);
    }
    if(id_array[17].toUpperCase() != b[sum%11].toUpperCase()){
      return {'status':0,'msg':'身份证校验码不合规'}
    }
    return {'status':1,'msg':'校验通过'}
}

https://jingyan.baidu.com/article/7f41ececff944a593d095c8c.html
```
🏠 :house:
🏡 :house_with_garden:
🏫 :school:
🏢 :office:
🏣 :post_office:
🏥 :hospital:
🏦 :bank:
🏪 :convenience_store:
🏩 :love_hotel:
🏨 :hotel:
💒 :wedding:
⛪ :church:
🏬 :department_store:
🏤 :european_post_office:
🌇 :city_sunrise:
🌆 :city_sunset:
🏯 :japanese_castle:
🏰 :european_castle:
⛺ :tent:
🏭 :factory:
🗼 :tokyo_tower:
🗾 :japan:
🗻 :mount_fuji:
🌄 :sunrise_over_mountains:
🌅 :sunrise:
🌠 :stars:
🗽 :statue_of_liberty:
🌉 :bridge_at_night:
🎠 :carousel_horse:
🌈 :rainbow:
🎡 :ferris_wheel:
⛲ :fountain:
🎢 :roller_coaster:
🚢 :ship:
🚤 :speedboat:
⛵ :boat:
⛵ :sailboat:
🚣 :rowboat:
⚓ :anchor:
🚀 :rocket:
✈️ :airplane:
🚁 :helicopter:
🚂 :steam_locomotive:
🚊 :tram:
🚞 :mountain_railway:
🚲 :bike:
🚡 :aerial_tramway:
🚟 :suspension_railway:
🚠 :mountain_cableway:
🚜 :tractor:
🚙 :blue_car:
🚘 :oncoming_automobile:
🚗 :car:
🚗 :red_car:
🚕 :taxi:
🚖 :oncoming_taxi:
🚛 :articulated_lorry:
🚌 :bus:
🚍 :oncoming_bus:
🚨 :rotating_light:
🚓 :police_car:
🚔 :oncoming_police_car:
🚒 :fire_engine:
🚑 :ambulance:
🚐 :minibus:
🚚 :truck:
🚋 :train:
🚉 :station:
🚆 :train2:
🚅 :bullettrain_front:
🚄 :bullettrain_side:
🚈 :light_rail:
🚝 :monorail:
🚃 :railway_car:
🚎 :trolleybus:
🎫 :ticket:
⛽ :fuelpump:
🚦 :vertical_traffic_light:
🚥 :traffic_light:
⚠️ :warning:
🚧 :construction:
🔰 :beginner:
🏧 :atm:
🎰 :slot_machine:
🚏 :busstop:
💈 :barber:
♨️ :hotsprings:
🏁 :checkered_flag:
🎌 :crossed_flags:
🏮 :izakaya_lantern:
🗿 :moyai:
🎪 :circus_tent:
🎭 :performing_arts:
📍 :round_pushpin:
🚩 :triangular_flag_on_post: