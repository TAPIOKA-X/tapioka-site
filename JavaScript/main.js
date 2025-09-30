//コメント書くの一番疲れたｗ
const URL = {
Home:"https://tapioka-site.f5.si",
Menu:"https://tapioka-site.f5.si/Menu.html",
UsPs:"https://tapioka-site.f5.si/Blog/UnwaveringSoul/UnwaveringSoul-PS.html",
Rivals_Video:"https://tapioka-site.f5.si/Blog/Rivals/Rivals-Video.html",
YouTuber:"https://tapioka-site.f5.si/Blog/YouTube/YouTuber.html",
YouTuber:"https://tapioka-site.f5.si/Blog/Tools/TS-Editor.html",
RobloxGroup:"https://www.roblox.com/ja/communities/33917666/TAPIOKA#!/about",
LINE:"https://line.me/ti/g2/AgWjjh03PWGRbjgCPIfBie0e4-JIw4RES4T9Fg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
};
//リダイレクト関数
function HomeLink(){
 location.href=URL.Home;
}

function MenuLink(){
 location.href=URL.Menu;
}

function UnwaveringSoul_PrivateServer(){
 location.href=URL.UsPs;
}

function Rivals_Video(){
 location.href=URL.Rivals_Video;
}

function LINE(){
 window.open(URL.LINE,"_blank");
}


function RobloxGroup(){
 window.open(URL.RobloxGroup,"_blank");
}

function YouTuber(){
 location.href=URL.YouTuber;
}

function TS_Editor(){
 location.href=URL.TS_Editor;
}
//その他の関数
function PScodeCopy(){
 let PScode = document.getElementById("US-PS").textContent;
 navigator.clipboard.writeText(PScode);
}

function ShareLinkCopy(){
 navigator.clipboard.writeText(URL.Home);
 alert("コピーできました。");
}
