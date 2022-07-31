/*
 * @Description: 登录页面逻辑
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2021-03-07 09:09:44
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-06-24 15:27:37
 * @FilePath: /login-demo/web/views/login/login.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */

/*   登录注册切换功能   */
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
/*   登录注册切换功能   */



// Dom树加载完后调用
$(document).ready(
	// 登录按钮点击
	$("#login_btn").on('click', function () {
		// 收集页面用户输入的数据
		let account = $("#account").val()
		let password = $("#password").val()
		// 发起Ajax请求，将数据提交到服务端
		$.ajax({
			type: "POST",
			url: "/loginAction",
			data: { "account": account, "password": password },
			success: function (response) {
				console.log(response);
				// 根据返回的数据判断结果
				if (response.length < 1) {
					alert("用户名或密码错误")
				} else {
					// 验证成功，则跳转到主页
					location.href = "/home"
				}
			},
			fail: function (err) {
				// 请求失败
				console.log(err);
			}
		})
	})
)
