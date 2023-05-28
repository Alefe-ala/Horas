const horas = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('second');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sen = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (sen < 10) sen = '0' + sen;

    horas.innerHTML = hr;
    minutes.textContent = min;
    seconds.textContent = sen;
});