$( document ).ready(function() {
});

$('#greeting').text(getDay());

function getDay(){
    var date = new Date();
    var currentDay = date.getDay();
    var dateArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var greeting = 'Happy ' + dateArray[currentDay] + '!'
    return greeting
}

