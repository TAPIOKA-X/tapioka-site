function DeviceType(){
let AdsURL = {
 Phone : "https://adm.shinobi.jp/s/30676a41c8f9c49d8f43aaba667976c5",
 PC : "https://adm.shinobi.jp/s/1ba4cd8884e62c1d123487c7fbccde9e"
};
 const w = window.innerWidth;
 const h = window.innerHeight;
  let Ads = document.getElementsByClassName("Ads");
if(w > 467 && h > 59){
 Ads.src = AdsURL.PC;
}else if(w < 319 && h < 49){
 Ads.src = AdsURL.Phone;
}else{
 Ads.src = AdsURL.PC;
}
}

window.onload = DeviceType;

function PScodeCopy(){ //ゆるたまのプラサバのやつ
 let PScode = document.getElementById("US-PS").textContent;
 navigator.clipboard.writeText(PScode);
 alert(`プライベートサーバーコード「${PScode}」をコピーできました。`);
}
