var Quiz = document.getElementById("QuizForm");

function Answer(){
  if(Quiz.value == "YaoYN"){
    alert("正解です。揺るぎない魂の製作者のユーザーネームは「YaoYN」です。\n2問目に移動します！！2問目も頑張りましょう！");
    location.href= "02.html";
  }else{
    alert("不正解です。もう１度挑戦しましょう！");
  };
};
