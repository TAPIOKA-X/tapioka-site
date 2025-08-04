var DT = document.title;
var Point = document.getElementById("Point");

if(DT === "aa" && Point.textContent < "01"){
  alert("アクセスが不正です。");
}else if(DT === "02"){
  alert("アクセスが不正です。");
}else if(DT === "32"){
  alert("アクセスが不正です。");
}else{
  location.href= "https://tapioka-site.f5.si/";
}
