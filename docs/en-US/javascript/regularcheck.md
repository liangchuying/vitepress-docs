# 正则校验

#### 身份证校验
```js
function validateIDCard(idCard) {
    // 正则表达式校验身份证号格式
    const regExp = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}([0-9Xx])$/;
 
    if (!regExp.test(idCard)) {
        return false;
    }
 
    // 校验码验证
    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
 
    const idCardChars = idCard.toUpperCase().split('');
    let sum = 0;
 
    for (let i = 0; i < 17; i++) {
        sum += parseInt(idCardChars[i], 10) * weights[i];
    }
 
    const mod = sum % 11;
    const checkCode = checkCodes[mod];
 
    if (checkCode !== idCardChars[17]) {
        return false;
    }
 
    // 验证出生日期的合法性
    const year = parseInt(idCard.substring(6, 10), 10);
    const month = parseInt(idCard.substring(10, 12), 10);
    const day = parseInt(idCard.substring(12, 14), 10);
 
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
 
    if (
        year < 1900 ||
        year > currentYear ||
        month < 1 || month > 12 ||
        day < 1 || day > 31 ||
        (year === currentYear && month > currentMonth) ||
        (year === currentYear && month === currentMonth && day > currentDay)
    ) {
        return false;
    }
 
    return true;
}
 
// 测试示例
const idCardNumber = "身份证号"; // 替换为实际的身份证号
if (validateIDCard(idCardNumber)) {
    console.log("身份证号合法");
} else {
    console.log("身份证号不合法");
}
```

#### 信息脱敏
```js

// 手机号做脱敏处理
function phoneHide(phone) {
  let reg = /^(1[3-9][0-9])\d{4}(\d{4}$)/;
  phone = phone.replace(reg, '$1****$2');
  return phone; // 185****6696
}

// 身份证号脱敏
function cardHide(card) {
  const reg = /^(.{6})(?:\d+)(.{4})$/; // 留前6位和后4位
  const maskedIdCard = card.replace(reg, '$1******$2'); 
  return maskedIdCard; // 输出：371782******5896
}

// 姓名脱敏
function nameHide(name) {
  if (name.length == 2) {
      name = name.substring(0, 1) + '*'; 
      return name; 
  } else if (name.length == 3) {
      name = name.substring(0, 1) + '*' + name.substring(2, 3); 
      return name; 
  } else if (name.length > 3) {
      name = name.substring(0, 1) + '*' + '*' + name.substring(3, name.length); 
      return name; 
  }
}
```
