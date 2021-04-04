"use strict";

//快速创建WEB服务器
//核心模块 http
var http核心模块 = require("http");

//创建一个服务器
var 服务器 = http核心模块.createServer();

//那么服务器能干嘛呢
//发请求  接收请求   处理请求   反馈(响应)

//服务器事件  request 请求事件  收到请求就触发
服务器.on("request", function (请求对象,响应对象) {
	// 请求对象 方法内容
	// url  请求的的地址
	console.log("收到请求了~,请求的路径是" + 请求对象.url);
	// 响应对象 方法内容
	// write 可以使用多次,用于输出
	// end 结束响应  不结束客户端会一直等待
	
	//随便玩玩~~~~
	var Pas;
	switch(decodeURI(请求对象.url)){
		case "/显示时间":
			Pas = Date();
			break;
		case "/Node":
			Pas = "这是NodeJS！";
			break;
		default :
		this.__proto__.Name = xxA
			Pas = decodeURI(请求对象.url);
			Pas = /^\/输出/.test(Pas) ? Pas.replace(/^\/输出/,"") : "hello";
	}
	
	
	// 响应对象.write("<h1>" + Pas + "</h1>");
	//最后必须用end结束响应 否则客户端会一直等待
	响应对象.end("<h1>" + Pas + "</h1>");
	
});

//绑定端口号
//随便 只要不被占用
服务器.listen(80,function(){
	console.log("服务器启动成功~,可以通过 http://localhost 进行访问");
});