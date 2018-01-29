// 右边的弹出框
var tan = document.querySelector(".button-right");
var close = document.querySelector(".tankai");
var zz = document.querySelector("#tanzz");
tan.onclick = function(){
	zz.style.display = "block";
}
close.onclick = function(){
	zz.style.display = "none";
}
// 导航栏中点击二级菜单出现相相映的三级菜单
var secli = document.querySelectorAll(".second-li");
var menu = document.querySelectorAll(".menu-ri");
menu[0].style.display = "block";
menu[13].style.display = "block";
menu[17].style.display = "block";

