 let PScodeElement = document.getElementById("US-PS");
 const PScode = "28d14zT";

window.onload = function(){
 PScodeElement.textContent = PScode;
}
function PScodeCopy(){ //ゆるたまのプラサバのやつ
 navigator.clipboard.writeText(PScode);
 alert(`プライベートサーバーコード「${PScode}」をコピーできました。`);
}
