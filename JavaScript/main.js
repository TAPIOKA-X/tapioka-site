const URL = {
RobloxGroup:"https://www.roblox.com/ja/communities/33917666/TAPIOKA#!/about",
LINE:"https://line.me/ti/g2/AgWjjh03PWGRbjgCPIfBie0e4-JIw4RES4T9Fg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
};
function PScodeCopy(){
 let PScode = document.getElementById("US-PS").textContent;
 navigator.clipboard.writeText(PScode);
 alert(`プライベートサーバーコード「${PScode}」をコピーできました。`);
}
