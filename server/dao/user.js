/*
 * @Description: 用户模块后端
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-06-24 01:23:25
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-06-24 14:34:07
 * @FilePath: /login-demo/server/dao/user.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
let db = require("../config/db")

// 登录验证方法,检测用户的账号密码是否正确
function login(account, password, callback) {
  // 准备sql语句
  let sql = "SELECT * FROM user WHERE username=? AND password=?";
  // 准备参数
  let sqlParm = [account, password]
  // 执行sql
  db.query(sql, sqlParm, function (err, result) {
    if (err) {
      // 如果出现错误，就打印错误
      console.log(err);
    } else {
      // 如果没有错误，就通过回调函数将结果返回
      // 对结果进行处理
      let resultStr = JSON.stringify(result) // 将结果转化成字符串
      let data = JSON.parse(resultStr) // 将数据转化为JSON对象
      callback(data)
    }
  })
}

module.exports = {
  login: login
}