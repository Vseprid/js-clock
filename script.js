const secondHand = document.querySelector('.hand_second');
const minHand = document.querySelector('.hand_min');
const hourHand = document.querySelector('.hand_hour')

function setDate(hourHand, minHand, secondHand) {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = (second / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = (min / 60) * 360 + second/60 * 6 + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours()
    const hourDegrees = (hour / 12) * 360 + min/60 * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

let handsMovement = setTimeout(function run() {
    setDate(hourHand, minHand ,secondHand);
    console.log('hi')
    handsMovement = setTimeout(run, 1000);
}, 1000);