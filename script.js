const secondHand = document.querySelector('.hand_second');
const minHand = document.querySelector('.hand_min');
const hourHand = document.querySelector('.hand_hour');

const circularSecond = document.querySelector('.circle_second');
const circularMin = document.querySelector('.circle_min');
const circularHour = document.querySelector('.circle_hour');

const exactTime = document.getElementById('exact-time');

const elementsTime = {
    secondHand,
    minHand,
    hourHand,
    exactTime,
    circularSecond,
    circularMin,
    circularHour,
}

function setDate(elementsTime) {
    const {secondHand, minHand, hourHand, circularSecond, circularMin, circularHour, exactTime} = elementsTime;

    const week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    const now = new Date();

    let dayOfWeek = week[now.getDay()];
    let nowDate = now.toLocaleDateString('ru', {day: 'numeric', month: 'long', year: 'numeric'})
    exactTime.innerHTML = `${now.toLocaleTimeString('ru')} ${dayOfWeek}, ${nowDate}`;

    const second = now.getSeconds();
    const secondDegrees = (second / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    const secondPercent = (second / 60) * 100;
    const circleSecond = circularSecond.querySelector('.circle');
    const percentageSec = circularSecond.querySelector('.percentage');
    circleSecond.style.strokeDasharray = `${secondPercent}, 100`;
    percentageSec.textContent = second;

    const min = now.getMinutes();
    const minDegrees = (min / 60) * 360 + second/60 * 6 + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    const minPercent = (min / 60) * 100;
    const circleMin = circularMin.querySelector('.circle');
    const percentageMin = circularMin.querySelector('.percentage');
    circleMin.style.strokeDasharray = `${minPercent}, 100`;
    percentageMin.textContent = min;

    const hour = now.getHours()
    const hourDegrees = (hour / 12) * 360 + min/60 * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    const hourPercent = (hour / 60) * 100;
    const circleHour = circularHour.querySelector('.circle');
    const percentageHour = circularHour.querySelector('.percentage');
    circleHour.style.strokeDasharray = `${hourPercent}, 100`;
    percentageHour.textContent = hour;
}

let handsMovement = setTimeout(function run() {
    setDate(elementsTime);
    handsMovement = setTimeout(run, 1000);
}, 1000);