 let PScodeElement = document.getElementById("US-PS");
 const PScode = "z39w9a5";

window.onload = function(){
 PScodeElement.textContent = PScode;
}
function PScodeCopy(){ //ゆるたまのプラサバのやつ
 navigator.clipboard.writeText(PScode);
 alert(`プライベートサーバーコード「${PScode}」をコピーできました。`);
}
