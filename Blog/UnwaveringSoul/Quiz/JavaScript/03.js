var Quiz = document.getElementById("QuizForm");

function Answer(){
  if(Quiz.value == "75万"){
    alert("正解です。揺るぎない魂の武器「」のダメージは「75万」です。。\n4問目に移動します！！4問目も頑張りましょう！\nまだ4問目は作れてないよ！");
    //location.href= "04.html";
  }else{
    alert("不正解です。もう１度挑戦しましょう！");
  };
};
