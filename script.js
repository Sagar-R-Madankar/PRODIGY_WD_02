let time_ele = document.getElementsByClassName("time")[0];
let start_btn = document.getElementById("start");
let lap_btn = document.getElementById("lap");
let stop_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset");

let milliseconds = 0;
let interval;
let lapCounter = 0;

start_btn.addEventListener("click", start);
lap_btn.addEventListener("click", lap);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

function timer() {
    milliseconds++;
    let mins = Math.floor(milliseconds / (100 * 60));
    let secs = Math.floor((milliseconds / 100) % 60);
    let msecs = milliseconds % 100;

    mins = extraZero(mins);
    secs = extraZero(secs);
    msecs = extraZero(msecs);

    time_ele.innerHTML = `${mins}:${secs}.${msecs}`;
}

function extraZero(num) {
    return num < 10 ? "0" + num : num;
}

function start() {
    clearInterval(interval);
    interval = setInterval(timer, 10);
}

function lap() {
    lapCounter++;
    let lapElement = document.createElement('h4');
    lapElement.textContent = "Lap " + lapCounter + ":  " + time_ele.innerHTML;
    document.querySelector('.laps').appendChild(lapElement);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    milliseconds = 0;
    lapCounter = 0;
    time_ele.innerHTML = "00:00:00";

    let lapContainer = document.querySelector('.laps');
    lapContainer.innerHTML = '';
}
