setInterval(() => {
    var d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotations = 30 * htime + mtime / 2;
    mrotations = 6 * mtime;
    srotations = 6 * stime;

    hoursLine.style.transform = `rotate(${hrotations}deg)`;
    minutesLine.style.transform = `rotate(${mrotations}deg)`;
    secondsLine.style.transform = `rotate(${srotations}deg)`;
}, 1000);