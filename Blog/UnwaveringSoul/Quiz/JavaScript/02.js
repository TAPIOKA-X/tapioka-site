var Quiz = document.getElementById("QuizForm");

function Answer(){
  if(Quiz.value == "2018年9月5日"){
    alert("正解です。揺るぎない魂が作られたのは、「2018年9月5日」です。。\n3問目に移動します！！3問目も頑張りましょう！\nまだ3問目は作れてないよ！");
    //location.href= "03.html";
  }else{
    alert("不正解です。もう１度挑戦しましょう！");
  };
};
