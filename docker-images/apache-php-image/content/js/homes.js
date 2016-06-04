$(function() {
 console.log("Loading homes");

 function loadHomes() {
  $.getJSON( "/api/students/", function( homes ) {
   console.log(homes);
   var message = "";
   message = homes[0].address + "\n" + homes[0].areacode;
   $(".intro-text").text(message);
  });
 };

 loadHomes();
 setInterval( loadHomes, 2000 );
});
