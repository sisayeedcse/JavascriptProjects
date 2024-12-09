var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');
var dateWrite = document.getElementById('mainDate');
var nameWrite = document.getElementById('nameId');
var purpWrite = document.getElementById('purpose');
var name = prompt('What is your name?');
var purp = prompt('What you need this countDown?');
var date = parseInt(prompt('Enter Your Birth date'));
var month = prompt('Enter Your Birth month');
var year = parseInt(prompt('Enter this year'));

var mainDate = date + " " + month +" " + year; 
dateWrite.innerHTML = mainDate;
nameWrite.innerHTML = name + "'s";
purpWrite.innerHTML = purp;
var birthDay = mainDate;

function countDown() {
    var birthDayDate = new Date(birthDay);
    var currentDate = new Date();

    var totalSeconds = (birthDayDate - currentDate) / 1000;
    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;

    // console.log(days, hours, minutes, seconds);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

//Initial Call
countDown();
setInterval(countDown, 1000);