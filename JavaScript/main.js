//コメント書くの一番疲れたｗ
var Home = "https://tapioka-site.f5.si";
var Menu = "https://tapioka-site.f5.si/Menu.html";
var RobloxGroup = "https://www.roblox.com/ja/communities/33917666/TAPIOKA#!/about";
var LINE = "https://line.me/ti/g2/AgWjjh03PWGRbjgCPIfBie0e4-JIw4RES4T9Fg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default";

//Shareページなのか確認
window.onload = function(){

 if(document.title === "Share"){
  setTimeout(function(){
   location.href= Home;
  },3000);
 }else{
  ;
 };
};

//基本的な関数
function HomeLink(){
 location.href = Home;
}

function MenuLink(){
  location.href= Menu;
}

function RobloxGroupLink(){
 alert("Roblox.comに移動します、よろしいですか？");
 window.open(RobloxGroup,"_blank");
}

function LINELink(){
 alert("LINEに移動します、よろしいですか？");
 window.open(LINE,"_blank");
}

function USpsLink(){
 window.open("Blog/UnwaveringSoul/UnwaveringSoul-PS.html","_blank");
}

//揺るぎない魂のクイズ
function USquizLink(){
 window.open("Blog/UnwaveringSoul/Quiz/01.html","_blank");
}

function YouTuberLink(){
 window.open("Blog/YouTube/YouTuber.html","_blank");
}

//その他の関数
function UpdateAlert(){
 alert("現在制作中です。");
 location.href= Home;
}

function PScodeCopy(){
 var PScode = document.getElementById("UnwaveringSoulPrivateServer").textContent;
 navigator.clipboard.writeText(PScode);
}

function ShareLinkCopy(){
 var ShareLink = "https://tapioka-site.f5.si/Share.html";
 navigator.clipboard.writeText(ShareLink);
 alert("コピーできました。");
}
