const DaysEl = document.getElementById('days-span');

const hoursEl = document.getElementById('hours-span');

const minutesEl = document.getElementById('minutes-span');

const secondsEl = document.getElementById('seconds-span');

let intervalid;

function LaunchCountdown() {

    const targetDate = new Date("2023-09-22");
    const newDate = new Date();

    const remainingTime = targetDate.getTime() - newDate.getTime();

    
    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24
    
    const days = Math.floor(remainingTime / day);
    const hours = Math.floor((remainingTime % day) / hour);
    const minute = Math.floor((remainingTime % hour) / minutes);
    const secondss = Math.floor((remainingTime % minutes) / seconds);

    d = days < 10 ? '0' + days : days;
    h = hours < 10 ? '0' + hours : hours;
    m = minute < 10 ? '0' + minute : minute;
    s = secondss < 10 ? '0' + secondss : secondss;


    intervalid = setInterval(()=>{
        LaunchCountdown()
    }, 1000)

    
    if (remainingTime < 0) {
        DaysEl.innerHTML = '00';
        hoursEl.innerHTML = '00';
        minutesEl.innerHTML = '00';
        secondsEl.innerHTML = '00';
        return false;
    } else {
        DaysEl.innerHTML = d;
        hoursEl.innerHTML = h;
        minutesEl.innerHTML = m;
        secondsEl.innerHTML = s;
        return false;
    }

}

LaunchCountdown()