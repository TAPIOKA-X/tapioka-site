var Quiz = document.getElementById("QuizForm");

function Answer(){
  if(Quiz.value == "750000"){
    alert("正解です。揺るぎない魂の武器「」のダメージは「750000(75万)」です。。\n4問目に移動します！！4問目も頑張りましょう！");
    location.href= "04.html";
  }else{
    alert("不正解です。もう１度挑戦しましょう！");
  };
};
