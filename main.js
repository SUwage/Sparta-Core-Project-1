$(document).ready(function() {

  // var animateTruck = function () {
  //
  //     $('#donald-trump').css('left','100px')
  //                .animate({'left':$(window).width()},
  //                         3000,
  //                         'linear',
  //                         function(){
  //                             animateTruck();
  //                         });
  // };
  //
  // animateTruck();

  function loop() {
    $('#michael-jordan').animate({'top': '200px'}, {
        duration: 500,
        complete: function() {
            $('#michael-jordan').animate({top: '210px'}, {
                duration: 500,
                complete: loop});
        }
      });
}
loop();

function loop1() {
  $('#kanye-west').animate({'top': '210px'}, {
      duration: 500,
      complete: function() {
          $('#kanye-west').animate({top: '220px'}, {
              duration: 500,
              complete: loop1});
      }
    });
}
loop1();

// function loop3() {
//   $('#donald-trump').animate({'left': '100px'}, {
//       duration: 1000,
//       complete: function() {
//           $('#donald-trump').animate({right: '500px'}, {
//               duration: 1000,
//               complete: loop3});
//       }
//     });
// }
// loop3();




  window.sr = ScrollReveal();
  sr.reveal('#start-btn', {
    duration: 2000,
    origin:'bottom',
    distance:'800px',
    viewFactor: 0.2
  });





});
