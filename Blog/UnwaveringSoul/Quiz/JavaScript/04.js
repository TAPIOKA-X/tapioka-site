var Quiz = document.getElementById("QuizForm");

function Answer(){
  if(Quiz.value == "60"){
    alert("正解です。揺るぎない魂のボス「Grillby」のHpは「60」です。\n5問目に移動します！！5問目も頑張りましょう！\n5問目はまだ作れてないよ！");
    //location.href= "05.html";
  }else{
    alert("不正解です。もう１度挑戦しましょう！");
  };
};
