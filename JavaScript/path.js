//Video URL
const VideoURL = {
 Rivals_1: "https://dl.dropboxusercontent.com/scl/fi/58k8gkajv4ckb40yts5c1/Friend-2v2_1.mp4?rlkey=5rdk11kesf5dkm8ww5934xtxa&st=beq9pnan&dl=0",
 Rivals_2: "https://dl.dropboxusercontent.com/scl/fi/47c6ezr8szeuiuo70rgy7/vs-Blue_fool.mp4?rlkey=j993wipxfqr2lsf9do2qiepy2&st=qwfmaynp&dl=0"
};

//path
window.onload = function(){
 if(location.href === "https://tapioka-site.f5.si/Blog/Rivals/Rivals-Video.html"){
  document.getElementById("Friend-2v2_1").src = VideoURL.Rivals_1;
   document.getElementById("vsBlue_fool").src = VideoURL.Rivals_2;
 };
};
