// 幼斌的弹出框
var tan = document.querySelector(".button-right");
var close = document.querySelector(".tankai");
var zz = document.querySelector("#tanzz");
tan.onclick = function(){
	zz.style.display = "block";
}
close.onclick = function(){
	zz.style.display = "none";
}