//コメント書くの一番疲れたｗ
const URL = {
 Home: "//tapioka-site.f5.si",
 Menu: "//tapioka-site.f5.si/Menu.html",
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





//その他の関数
function PScodeCopy(){
 let PScode = document.getElementById("US-PS").textContent;
 navigator.clipboard.writeText(PScode);
}

function ShareLinkCopy(){
 const ShareLink = "//tapioka-site.f5.si/Share.html";
 navigator.clipboard.writeText(ShareLink);
 alert("コピーできました。");
}
