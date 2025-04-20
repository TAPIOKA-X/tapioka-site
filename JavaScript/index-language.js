//変数
var English = document.getElementById("English");
var SiteVersion = document.getElementById("SiteVersion");

var welcome = document.getElementById("Welcome");
var USreset = document.getElementById("UnwaveringSoulReset");

var US = document.getElementById("UnwaveringSoul");
var USblogMenu = document.getElementById("UnwaveringSoulBlogMenu");

var USps = document.getElementById("UnwaveringSoul-PS");
var USvideo = document.getElementById("UnwaveringSoul-Video");
var USytb = document.getElementById("UnwaveringSoul-YTB");
var USdiscord = document.getElementById("UnwaveringSoul-Discord");


//ここから、押されたとき(onclick)の操作
function english(){
 alert("テスト段階の機能のため、バグがある可能性があります。実行しますか？");
 English.innerHTML = "Japanese to english language button";
 SiteVersion.innerHTML = "Site Version : ????";
 
 welcome.innerHTML = "Welcome";
 USreset.innerHTML = "Unwavering Soul Reset : 150Reset";

 US.innerHTML = "Unwavering Soul";
 USblogMenu.innerHTML = "➤ Open to Unwavering Soul Blog Menu";

 USps.innerHTML = "Unwavering Soul Private Server Code";
 USvideo.innerHTML = "Unwavering Soul Video";
 USytb.innerHTML = "Unwavering Soul YouTuber List";
 USdiscord.innerHTML = "Unwavering Soul Discord Server / By: TAPIOKA";
}
