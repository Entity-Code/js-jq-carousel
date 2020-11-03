$(document).ready(function () {

//click version
   // if > clicked, go next
   $(".next").click(function () {
      nextImg();
      nextCircle();
   });
   // if < clicked, go back
   $(".prev").click(function () {
      prevImg();
      prevCircle();
   });

//keypress version
   $(document).keyup(function (e) {
   // saving codes of key > and < in variables
   var right = 39;
   var left = 37;
      // if > pressed, go next
      if (e.keyCode == right) {
         nextImg();
         nextCircle();
      // if < pressed, go back
      } else if (e.keyCode == left){
         prevImg();
         prevCircle();
      }
   });





// functions img
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

//functions circles
   // function to go next
   function nextCircle() {
      var circleActive = $(".circle.active");
      circleActive.removeClass("active");

      // se il circle con classe last, contiene anche "active"
      if (circleActive.hasClass("last")) {
         //torna al circle con classe first (al primo circle)
         $(".circle.first").addClass("active");
      } else { //altrimenti
         //fai divntare attivo il circle successivo
         circleActive.next(".circle").addClass("active");
      }
   }
   // function to go next
   function prevCircle() {
      var circleActive = $(".circle.active");
      circleActive.removeClass("active");

      // se il circle con classe last, contiene anche "active"
      if (circleActive.hasClass("first")) {
         //torna al circle con classe first (al primo circle)
         $(".circle.last").addClass("active");
      } else { //altrimenti
         //fai divntare attivo il circle successivo
         circleActive.prev(".circle").addClass("active");
      }
   }
});
