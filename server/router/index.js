/*
 * @Description: 路由主文件
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-06-24 00:41:08
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-06-25 14:15:54
 * @FilePath: /login-demo/server/router/index.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */

let express = require("express")
let path = require("path")
let userDao = require("../dao/user")

// 创建路由实例
let router = express.Router()

// 路由到登录页面，加载展示登录页面
router.get("/login", function (request, response) {
  response.sendFile(path.join(__dirname, "../../web/views/login/login.html"))
})

// 路由到notice页面，加载展示notice页面
router.get("/notice", function (request, response) {
  response.sendFile(path.join(__dirname, "../../web/views/notice/notice.html"))
})

// 路由到首页，加载首页
router.get("/home", function (request, response) {
  response.sendFile(path.join(__dirname, "../../web/views/home/home.html"))
})

// 登录验证处理
router.post("/loginAction", function (request, response) {
  let account = request.body.account
  let password = request.body.password
  console.log(account, password);
  userDao.login(account, password, function (result) {
    // 返回数据
    // console.log(result);
    response.send(result)
  })

})

//将路由暴露出去
module.exports = router