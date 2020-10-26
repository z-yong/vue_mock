/*正则服务*/

export default {
  // 手机号
  phone: /^1[3-9]\d{9}$/,
  // 电话(含手机)
  tel: /^(1[3-9]\d{9}|\d{3,5}(-|\s)?\d{4,10})$/,
  // QQ号
  qq: /^\d{5,11}$/,
  // email
  email:  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  // 身份证号
  idCard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  // 用户名4到16位（字母，数字，下划线，减号）
  userName: /^[a-zA-Z0-9_-]{4,16}$/,
  // 包含中文
  cnWord: /[\u4E00-\u9FA5]/,
  // 金额
  money: /^\d+(\.\d{1,2})?$/i,


  /*--------以下是函数--------*/
  // 密码
  password(rule, value, callback) {
    if (value === '') {
      callback(new Error('请输入新密码'));
    } else if (value.match(/^\d+$/gi) || value.length < 6 || value.length > 16) {
      callback(new Error('请输入6-16位密码，不能是全数字哦！'));
    } else {
      callback();
    }
  },
}