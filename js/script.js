$(document).ready(function(){

    var audio = document.getElementById("my_audio");
    audio.play();   

    $('.headerset , #home').click(function () {
        var audio = document.getElementById("my_audio");
        audio.play();
        $(window).scroll(function() {
          
            if ($(window).scrollTop() < 300) {
                audio.play();
              }
              else{
                audio.pause();
              }
          });
    });
  
   
});
