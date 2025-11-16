 let PScodeElement = document.getElementById("US-PS");
 const PScode = "aAX1v9r";

window.onload = function(){
 PScodeElement.textContent = PScode;
}
function PScodeCopy(){ //ゆるたまのプラサバのやつ
 navigator.clipboard.writeText(PScode);
 alert(`プライベートサーバーコード「${PScode}」をコピーできました。`);
}
