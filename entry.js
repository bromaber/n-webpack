require("./style.css") //载入 style.css
console.log("Hello webpack!")
document.write(require("./module.js")) //添加模块
setTimeout(function(){
	alert("成功用webpack搭建一个小项目和开发环境")
},1000)