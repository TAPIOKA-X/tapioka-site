var English = document.getElementById("English");
var SiteVersion = document.getElementById("SiteVersion");

var welcome = document.getElementById("Welcome");
var USreset = document.getElementById("UnwaveringSoulReset");

var US = document.getElementById("UnwaveringSoul");
var USblogMenu = document.getElementById("UnwaveringSoulBlogMenu");

function english(){
 alert("テスト段階の機能のため、バグがある可能性があります。実行しますか？");
 English.innerHTML = "Japanese to english language button";
 SiteVersion.innerHTML = "Site Version : ????";
 
 welcome.innerHTML = "Welcome";
 USreset.innerHTML = "Unwavering Soul Reset : 150Reset";

 US.innerHTML = "Unwavering Soul";
 USblogMenu.innerHTML = "➤ Open to Unwavering Soul Blog Menu";
}
