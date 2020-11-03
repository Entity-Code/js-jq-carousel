$(document).ready(function () {

//click version
   // if > clicked, go next
   $(".next").click(nextImg);
   // if < clicked, go back
   $(".prev").click(prevImg);


//keypress version
   $(document).keyup(function (e) {
   // saving codes of key > and < in variables
   var right = 39;
   var left = 37;
      // if > pressed, go next
      if (e.keyCode == right) {
         nextImg();
      // if < pressed, go back
      } else if (e.keyCode == left){
         prevImg();
      }
   });





// functions

// function to go next
function nextImg() {
   var imgActive = $("img.active");
   imgActive.removeClass("active");


   // se l'img con classe last, contiene anche "active"
   if (imgActive.hasClass("last")) {
      //torna alla img con classe first (alla prima immagine)
      $("img.first").addClass("active");
   } else { //altrimenti
      //fai divntare attiva l'immagine successiva
      imgActive.next("img").addClass("active");
   }
}

// function to go back
function prevImg() {
   var imgActive = $("img.active");
   imgActive.removeClass("active");


   // se l'img con classe last, contiene anche "active"
   if (imgActive.hasClass("first")) {
      //torna alla img con classe first (alla prima immagine)
      $("img.last").addClass("active");
   } else { //altrimenti
      //fai divntare attiva l'immagine successiva
      imgActive.prev("img").addClass("active");
   }
}
});
