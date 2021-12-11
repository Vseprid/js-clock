const circularSecond = document.querySelector('.circle_second');
const circularMin = document.querySelector('.circle_min');
const circularHour = document.querySelector('.circle_hour');

const exactTime = document.getElementById('exact-time');

const sc = document.querySelector('#sc');
const mn = document.querySelector('#mn');
const hr = document.querySelector('#hr');

const elementsTime = {
    sc,
    mn,
    hr,
    exactTime,
    circularSecond,
    circularMin,
    circularHour,
}

function setDate(elementsTime) {
    const {sc, mn, hr, circularSecond, circularMin, circularHour, exactTime} = elementsTime;

    const week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    const now = new Date();

    const second = now.getSeconds();
    let ss = second * 6;
    sc.style.transform = `rotateZ(${ss}deg)`;
    const secondPercent = (second / 60) * 100;
    const circleSecond = circularSecond.querySelector('.circle');
    const percentageSec = circularSecond.querySelector('.percentage');
    circleSecond.style.strokeDasharray = `${secondPercent}, 100`;
    percentageSec.textContent = second;

    const min = now.getMinutes();
    let mm = min * 6 + second * 0.1;
    mn.style.transform = `rotateZ(${mm}deg)`;
    const minPercent = (min / 60) * 100;
    const circleMin = circularMin.querySelector('.circle');
    const percentageMin = circularMin.querySelector('.percentage');
    circleMin.style.strokeDasharray = `${minPercent}, 100`;
    percentageMin.textContent = min;

    const hour = now.getHours()
    let hh = hour * 30;
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    const hourPercent = (hour / 24) * 100;
    const circleHour = circularHour.querySelector('.circle');
    const percentageHour = circularHour.querySelector('.percentage');
    circleHour.style.strokeDasharray = `${hourPercent}, 100`;
    percentageHour.textContent = hour;

    let dayOfWeek = week[now.getDay()];
    let nowDate = now.toLocaleDateString('ru', {day: 'numeric', month: 'long', year: 'numeric'})
    exactTime.innerHTML = `${now.toLocaleTimeString('ru')} ${dayOfWeek}, ${nowDate}`;
}

let handsMovement = setTimeout(function run() {
    setDate(elementsTime);
    handsMovement = setTimeout(run, 1000);
}, 1000);
