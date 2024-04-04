$(document).ready(function(){

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
    $("#down").click(function(){
      document.getElementById('downloadbutton').innerHTML = '<a href="https://example.com/audio.mp3" download="audio.mp3">Download</a>'
    })
    function setDownloadLink() {
      document.getElementById('downloadbutton').innerHTML = '<a href="https://example.com/audio.mp3" download="audio.mp3">Download</a>'
      //You would need an element around the hyperlink with an ID, then you replace 'downloadbutton' with that ID.
    }
});
