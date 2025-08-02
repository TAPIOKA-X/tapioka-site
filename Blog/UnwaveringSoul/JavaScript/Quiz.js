//変数
var EasyQuiz01 = docment.getElementById("EasyQuiz01");
var LoseText = "不正解です。もう１度答えましょう :)";

//クイズ: 第1問の判定関数
function EasyQuiz01_Anwser(){
 if(EasyQuiz01.value === "YaoYN"){
  alert("正解です!\n揺るぎない魂の製作者のユーザネームは「YaoYN」です。");
 }else{
  alert(LoseText);
 };
};
