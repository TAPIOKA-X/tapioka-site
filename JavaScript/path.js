window.onload = function(){
//Systen
var dt = document.title;
//Flowey
var Flowey_1 = document.getElementById("Flowey_1");
var Flowey_2 = document.getElementById("Flowey_2");
var Flowey_3 = document.getElementById("Flowey_3");
var Flowey_4 = document.getElementById("Flowey_4");
//Dummy
var Dummy_1 = document.getElementById("Dummy-1");
var Dummy_2 = document.getElementById("Dummy-2");
var Dummy_3 = document.getElementById("Dummy-3");

 if(dt === "フラウィー"){
  Flowey_1.src = "//trello.com/1/cards/627c2e67e22ccc585f9c25e9/attachments/627c30b594fcf3453ae99a8b/download/e58b69741726028fd2e68e5504036b26.png";
  Flowey_2.src = "//trello.com/1/cards/627c2e67e22ccc585f9c25e9/attachments/642a1072bd22037775739d0b/download/86ce723ad00bf2c7ab0fca1804a736b7.gif";
  Flowey_3.src = "//dl.dropboxusercontent.com/scl/fi/pxgu6utnwpz1yxfj3fpiu/Flowey.gif?rlkey=ix93vbsyw5w49yn49lip64aqd&st=j60fvzk8&dl=0";
  Flowey_4.src = "//i.gyazo.com/1a27ca462b3a8c376272112819587523.png";
 }else if(dt === "ダミー"){
   Dummy_1.src = "//trello.com/1/cards/627c2e7bde760363e8933e98/attachments/627d1168783eef1a7b3ef341/download/27157f71c14ba59a8a3706d0b2275997.png";
   Dummy_2.src = "//i.gyazo.com/0754f1ec6aad52375e333c117cca9a84.png";
   Dummy_3.src = "//dl.dropboxusercontent.com/scl/fi/3wo80pe3fcthilwcvx1oy/Dummy.gif?rlkey=h7zl5xkvtizo6kn2us6gq90qc&st=g6okp5z7&dl=0";
 }
};
