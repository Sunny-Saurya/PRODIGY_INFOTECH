let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let lapTimes = [];

const display = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const lapTimesList = document.getElementById('lap-times');

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);

function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    displayTime();
  }, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
}

function pauseTimer() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function resetTimer() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  lapTimes = [];
  displayTime();
  lapTimesList.innerHTML = '';
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function lapTimer() {
  const lapTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  lapTimes.push(lapTime);

  const lapListItem = document.createElement('li');

  lapListItem.textContent = lapTime;
  
  lapTimesList.appendChild(lapListItem);
}

function displayTime() {
  const hoursDisplay = document.getElementById('hours');
  const minutesDisplay = document.getElementById('minutes');
  const secondsDisplay = document.getElementById('seconds');
  hoursDisplay.textContent = hours.toString().padStart(2, '0');
  minutesDisplay.textContent = minutes.toString().padStart(2, '0');
  secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}