var Quiz = document.getElementById("EasyQuiz01");
var QuizTitle = document.getElementById("QuizTitle");

function Answer(){
  if(Quiz.value == "YaoYN"){
    alert("正解です。揺るぎない魂の製作者のユーザーネームは「YaoYN」です。\n2問目が表示されました！2問目も頑張りましょう！");
    QuizTitle.innerHTML = "第2問: 揺るぎない魂が作られたのはいつ？(例: 2025年8月3日)";
     if(Quiz.value == "2018年9月5日"){
       alert("正解です。揺るぎない魂が作られたのは2018年9月5n日です。\n2問目が表示されました！2問目も頑張りましょう！");
     }else{
       alert("Test massege");
     };
  }else{
    alert("不正解です。もう１度挑戦しましょう！");
  };
};
