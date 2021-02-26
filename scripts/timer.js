let hour, minute, sec;
let timerId;
let isTimerStarted = false;

let printTimer = (hour, min, sec) => {
    document.getElementById('time-hour').value = hour;
    document.getElementById('time-minute').value = min;
    document.getElementById('time-sec').value = sec;
}
function startTimer() {
    if (!isTimerStarted) {
      isTimerStarted = true;
      hour = Number(document.getElementById('time-hour').value);
      min = Number(document.getElementById('time-minute').value);
      sec = Number(document.getElementById('time-sec').value);
      if (hour === NaN || min === NaN || sec === NaN) return;
      if (hour < 0 || min < 0 || sec < 0) return;
      timerId = setInterval(tick,1000);
      document.getElementById('time-hour').disabled = true;
      document.getElementById('time-minute').disabled = true;
      document.getElementById('time-sec').disabled = true;
    }
}
function stopTimer() {
    isTimerStarted = false;
    clearInterval(timerId);
    document.getElementById('time-hour').disabled = false;
    document.getElementById('time-minute').disabled = false;
    document.getElementById('time-sec').disabled = false;
}

function resetTimer() {
    stopTimer();
    sec = 0;
    min = 0;
    hour = 0;
    printTimer(hour, min, sec);
}

function tick() {
    if (sec === 0) {
        if (min === 0) {
            if (hour === 0) {
                stopTimer();
                return;
            } else {
                hour--;
                min = 59;
                sec = 59;
            }
        } else {
            min--;
            sec = 59;
        }
    } else sec--;
    printTimer(hour, min, sec)
}
