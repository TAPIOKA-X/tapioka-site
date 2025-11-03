function PScodeCopy(){ //ゆるたまのプラサバのやつ
 let PScode = document.getElementById("US-PS").textContent;
 navigator.clipboard.writeText(PScode);
 alert(`プライベートサーバーコード「${PScode}」をコピーできました。`);
}
