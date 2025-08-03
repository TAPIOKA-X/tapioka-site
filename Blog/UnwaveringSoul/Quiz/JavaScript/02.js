var Quiz = document.getElementById("QuizForm");

function Answer(){
  if(Quiz.value == "2018年9月3日"){
    alert("正解です。揺るぎない魂が作られたのは、「2018年9月3日」です。。\n3問目に移動します！！3問目も頑張りましょう！");
    location.href= "03.html";
  }else{
    alert("不正解です。もう１度挑戦しましょう！");
  };
};
