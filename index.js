$( document ).ready(function() {
});


$('#greeting').text(getDay());
// Wrap every letter in a span
$('.ml6 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml6 .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: function(el, i) {
        return 50 * i;
      }
    }).add({
      targets: '.ml6',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: function(el, i) {
      return 800 * i;
    }
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

function getDay(){
    var date = new Date();
    var currentDay = date.getDay();
    var dateArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var greeting = 'Happy ' + dateArray[currentDay] + '!'
    return greeting
}

