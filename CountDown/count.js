var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');
var dateWrite = document.getElementById('mainDate');
var nameWrite = document.getElementById('nameId');
var purpWrite = document.getElementById('purpose');

// Input prompts
var name = prompt('What is your name?');
var purp = prompt('What do you need this countdown for?');
var date = parseInt(prompt('Enter the day of the month (e.g., 31):'));
var month = parseInt(prompt('Enter the month as a number (1-12):')) - 1; // Convert to 0-based
var year = parseInt(prompt('Enter the year (e.g., 2024):'));

// Validate inputs
if (isNaN(date) || isNaN(month) || isNaN(year) || month < 0 || month > 11 || date < 1 || date > 31) {
    alert('Invalid input for date, month, or year. Please refresh and try again.');
} else {
    // Create the date string
    var mainDate = `${date}-${month + 1}-${year}`;
    dateWrite.innerHTML = mainDate;
    nameWrite.innerHTML = name + "'s";
    purpWrite.innerHTML = purp;

    // Set the target date
    var birthDay = new Date(year, month, date);

    function countDown() {
        var currentDate = new Date();
        var totalSeconds = (birthDay - currentDate) / 1000;

        if (totalSeconds < 0) {
            // Countdown expired
            daysEl.innerHTML = '0';
            hoursEl.innerHTML = '00';
            minutesEl.innerHTML = '00';
            secondsEl.innerHTML = '00';
            return;
        }

        var days = Math.floor(totalSeconds / 3600 / 24);
        var hours = Math.floor(totalSeconds / 3600) % 24;
        var minutes = Math.floor(totalSeconds / 60) % 60;
        var seconds = Math.floor(totalSeconds) % 60;

        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // Initial Call
    countDown();
    setInterval(countDown, 1000);
}
