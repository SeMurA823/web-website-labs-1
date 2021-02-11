let hour = 0, min = 0, sec =  0;
let timerId;
let timerFormatter = new Intl.NumberFormat("en",{
    minimumIntegerDigits: 2
})

let printTimer = (hour, min, sec) => {
    document.getElementById('time').textContent =
        `${hour}:${timerFormatter.format(min)}:${timerFormatter.format(sec)}`;
}
let startTimer = () => {
    timerId = setInterval(tick,1000);
}
let stopTimer = () => {
    clearInterval(timerId);
}

let resetTimer = () => {
    clearInterval(timerId);
    sec = 0;
    min = 0;
    hour = 0;
    printTimer(hour, min, sec);
}

let tick = () => {
    if (++sec >= 60) {
        sec = 0;
        if (++min >= 60) {
            min = 0;
            hour++;
        }
    }
    printTimer(hour, min, sec)
}
