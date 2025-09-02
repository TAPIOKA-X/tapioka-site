//コメント書くの一番疲れたｗ
const URL = {
 Home: "//tapioka-site.f5.si",
 Menu: "//tapioka-site.f5.si/Menu.html",
 UsPs: "//tapioka-site.f5.si/Blog/UnwaveringSoul/UnwaveringSoul-PS.html",
 YouTuber: "//tapioka-site.f5.si/Blog/YouTube/YouTuber.html",
 RobloxGroup: "//www.roblox.com/ja/communities/33917666/TAPIOKA#!/about",
 LINE: "//line.me/ti/g2/AgWjjh03PWGRbjgCPIfBie0e4-JIw4RES4T9Fg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
};

//Shareページなのか確認
function HomeLink(){
 location.href= URL.Home;
}

function MenuLink{
 location.href= URL.Menu;
}

function UnwaveringSoul_PrivateServer(){
 location.href= URL.UsPs;
}

function LINE(){
 window.open(URL.LINE,"_blank");
}


function RobloxGroup(){
 window.open(URL.RobloxGroup,"_blank");
}

function YouTuber(){
 location.href= URL.YouTuber;
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
