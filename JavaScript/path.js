//videoタグのidを取得する変数
var USvideo1 = document.getElementById("KingSum");
var USvideo2 = document.getElementById("AlphyNEO");
var USvideo3 = document.getElementById("100Dummy");
var USvideo4 = document.getElementById("SC-Sans");

//動画のファイルパス
var USvideo1_Link = "https://dl.dropboxusercontent.com/scl/fi/v8xgrqn7id2suas8t27gh/UnwaveringSoul-KingSum.mp4?rlkey=jmu1197f66isz43j9w4d04fqs&st=g93sebis&dl=0";
var USvideo2_Link = "https://dl.dropboxusercontent.com/scl/fi/o32o8jsy42rl8dk7bexyc/UnwaveringSoul-AlphysNEO.mp4?rlkey=q3adpkimidd5mn2jk2xg8jrad&st=xpdf1f3d&dl=0";
var USvideo3_Link = "https://tapioka-site.f5.si/Blog/UnwaveringSoul/Video/UnwaveringSoul-100Dummy.mp4";
var USvideo4_Link = "https://onedrive.live.com/personal/8f195d6b34cc43d9/_layouts/15/download.aspx?SourceUrl=%2Fpersonal%2F8f195d6b34cc43d9%2FDocuments%2Fvideo%2FUnwaveringSoul%2DSC%2DSans%2Emp4";

window.onload = function(){
 if(document.title === "揺るぎない魂 動画"){
   USvideo1.src = USvideo1_Link;
   USvideo2.src = USvideo2_Link;
   USvideo3.src = USvideo3_Link;
   USvideo4.src = USvideo4_Link;
 };  
};
