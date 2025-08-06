var Dt = document.title;
var Quiz = document.getElementById("QuizForm");

if(Dt === "【第1問】揺るぎない魂 クイズ"){ 
  function Answer(){
   if(Quiz.value == "YaoYN"){
    alert("正解です。揺るぎない魂の製作者は「YaoYN」です。。\n2問目に移動します！！2問目も頑張りましょう！");
    location.href= "02.html";
   }else{
    alert("不正解です。もう１度挑戦しましょう！");
  };
};
}else if(){
  ;
};
