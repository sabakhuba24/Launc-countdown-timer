var daysTimer = document.getElementById("days");
var hoursTimer = document.getElementById("hours");
var minutesTimer = document.getElementById("minutes");
var secondsTimer = document.getElementById("seconds");

function countDwn(){
    var endDate = new Date("Jul 20, 2024 13:37:25").getTime();
    var now = new Date().getTime();
    var distance = endDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysTimer.innerHTML = `${days}`
    hoursTimer.innerHTML = `${hours}`
    minutesTimer.innerHTML = `${minutes}`
    secondsTimer.innerHTML = `${seconds}`
}

setInterval(countDwn, 1000);