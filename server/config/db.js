/*
 * @Description: 数据库配置文件，设置本地数据库对应的属性值
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-06-24 01:11:32
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-07-31 17:38:15
 * @FilePath: /login-demo/server/config/db.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
let mysql = require("mysql")

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: 3306,
  database: "contacts",
  // 如果是mac，使用MAMP搭建的服务器，则需要加上以下配置, Windows系统需要注释以下语句
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
})
conn.connect()
module.exports = conn