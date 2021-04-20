const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');


const newYear = '1 Jan 2022';

const countdown = () => {

    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000 ;

    const days = Math.floor (totalSeconds/ 3600/24);
    const hours = Math.floor (days / 3600) % 24;
    const min = Math.floor(totalSeconds/60) % 60;
    const sec = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML= formatTime (hours);
    minEl.innerHTML =  formatTime (min);
    secEl.innerHTML = formatTime(sec) ;
    
    console.log(days,hours,min, sec);
}

const formatTime = (time) =>{

    return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown,1000);