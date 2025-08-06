//コメント書くの一番疲れたｗ

//基本的なボタンのクリック処理の関数
//index.htmlにつながるリンクのクリック処理
function HomeLink(){
 location.href = "https://tapioka-site.f5.si";
}
//Menu.htmlにつながるリンクのクリック処理
function MenuLink(){
  location.href= "https://tapioka-site.f5.si/Menu.html";
}

//コミニティなどに繋がるクリック処理を書いてる関数
//Robloxのグループ「TAPIOKA」のリンク
function RobloxGroupLink(){
 alert("Roblox.comに移動します、よろしいですか？");
 window.open("https://www.roblox.com/ja/communities/33917666/TAPIOKA#!/about","_blank");
}

//ディスコードサーバーの「TP Gamers」の招待リンクに繋がるクリック処理を書いてる関数 (新しいタブで開く)
function DiscordLink(){
 alert("Discord.ggに移動します、よろしいですか？");
window.open("https://discord.gg/s3QHYkqe4K","_blank");
}
//LINEオープンチャット「揺るぎない魂のオプチャ」の招待リンクに繋がるクリック処理を書いてる関数 (新しいタブで開く)
function LINELink(){
 alert("LINEに移動します、よろしいですか？");
 window.open("https://line.me/ti/g2/AgWjjh03PWGRbjgCPIfBie0e4-JIw4RES4T9Fg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default");
}

//揺るぎない魂 / Unwavering Soul
//揺るぎない魂のプライベートサーバーコードを置いてるページに繋がるクリック処理を書いてる関数 (新しいタブで開く)
function USpsLink(){
 window.open("Blog/UnwaveringSoul/UnwaveringSoul-PS.html","_blank");
}

//揺るぎない魂関連の動画を置いてあるページに繋がる処理を書いてる関数 (新しいタブで開く)
function USvideoLink(){
 window.open("Blog/UnwaveringSoul/UnwaveringSoul-Video.html","_blank");
}

//揺るぎない魂のクイズ
function USquizLink(){
 window.open("https://tapioka-site.f5.si/Blog/UnwaveringSoul/Quiz/01.html");
}

//グレース / Grace
//グレース関連の動画を置いてあるページに繋がる処理を書いてる関数 (新しいタブで開く)
function GCvideoLink(){
 window.open("Blog/Grace/Grace-Video.html","_blank");
}

//ライバル / Rivals
//ライバル関連の動画を置いてあるページに繋がる処理を書いてる関数 (新しいタブで開く)
function RLvideoLink(){
 window.open("Blog/Rival/Rival-Video.html","_blank");
}

//YouTuber宣伝の場所
function YouTuberLink(){
 window.open("Blog/YouTube/YouTuber.html");
}

//僕が自作したアプリの紹介ページ、ダウンロードページ に繋がる処理を書いてる関数 (すべて新しいタブで開く)
function WebShortCutDownloadPages(){
 window.open("Blog/Tool/Download/WebSiteShortCut_Download-Link.html");
}

//その他の関数 (アップデート中の警告、揺るぎない魂のプラサバコードをコピーするための関数)
function UpdateAlert(){
 alert("現在制作中です。");
 location.href= "https://tapioka-site.f5.si/";
}

//揺るぎない魂プライベートサーバーコードをコピーする処理を書いてる関数
function PScodeCopy(){
 navigator.clipboard.writeText("g99Vi48");
}
