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