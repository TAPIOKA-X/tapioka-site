//videoタグのidを取得する変数
var USvideo1 = document.getElementById("KingSum");
var USvideo2 = document.getElementById("AlphyNEO");
var USvideo3 = document.getElementById("100Dummy");
var USvideo4 = document.getElementById("SC-Sans");
var RLvideo1 = document.getElementById("Rival-1");
var RLvideo2 = document.getElementById("Rival-2");
var RLvideo3 = document.getElementById("Rival-3");
var RLvideo4 = document.getElementById("Rival-4");
var Grace_Id_1 = document.getElementById("Grace_Id-1");

//動画のファイルパス
var USvideo1_Link = "https://dl.dropboxusercontent.com/scl/fi/v8xgrqn7id2suas8t27gh/UnwaveringSoul-KingSum.mp4?rlkey=jmu1197f66isz43j9w4d04fqs&st=g93sebis&dl=0";
var USvideo2_Link = "https://dl.dropboxusercontent.com/scl/fi/o32o8jsy42rl8dk7bexyc/UnwaveringSoul-AlphysNEO.mp4?rlkey=q3adpkimidd5mn2jk2xg8jrad&st=xpdf1f3d&dl=0";
var USvideo3_Link = "https://tapioka-site.f5.si/Blog/UnwaveringSoul/Video/UnwaveringSoul-100Dummy.mp4";
var USvideo4_Link = "https://dl.dropboxusercontent.com/scl/fi/27vh88esv7bsc6kyhzv7n/UnwaveringSoul-SC-Sans.mp4?rlkey=3qerez4noff8rx3ifxnzjr8iq&st=iyord9mc&dl=0";
var RLvideo1_Link = "https://dl.dropboxusercontent.com/scl/fi/allqlkcvn3k8s9ujvnjh5/Rival-1v1-3.mp4?rlkey=w30c3u9rfavl7qeun9xbft6a8&st=g8b7etbu&dl=0";
var RLvideo2_Link = "https://tapioka-site.f5.si/Blog/Rival/Video/Rival-1v1-5.mp4";
var RLvideo3_Link = "https://dl.dropboxusercontent.com/scl/fi/vvv6nxtx4y290syh2a6f8/Rival-Acarde-Knife.mp4?rlkey=sycioa1c40mm3be7uyfofwgsg&st=8t1xn654&dl=0";
var RLvideo4_Link = "https://dl.dropboxusercontent.com/fi/76geivfx0gf3cwj4dk7tw/Rival-AR-GoldWrap.mp4?rlkey=8qnjwf6wh9rm0liply5ijgnzb&st=qkzvz3ll&dl=0";
var Grace_Id_1_Link = "https://dl.dropboxusercontent.com/scl/fi/gtis6mibihen5ni3k0v4f/Grace-320.mp4?rlkey=nnvv8tl0yeehb2wlecitgmuj4&st=ghtrzxqv&dl=0";

window.onload = function(){
 if(document.title === "揺るぎない魂 動画"){
   USvideo1.src = USvideo1_Link;
   USvideo2.src = USvideo2_Link;
   USvideo3.src = USvideo3_Link;
   USvideo4.src = USvideo4_Link;
 }else if(document.title === "ライバル 動画"){
   RLvideo1.src = RLvideo1_Link;
   RLvideo2.src = RLvideo2_Link;
   RLvideo3.src = RLvideo3_Link;
   RLvideo4.src = RLvideo4_Link;
 }else if(document.title === "Grace 320 - TAPI-HomePage"){
   Grace_Id_1.src = Grace_Id_1_Link;
 };
};
