// script_cronometro.js
let timer;
let isRunning = false;
let seconds = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(sec) {
  const hrs = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const secs = sec % 60;
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimer() {
  seconds++;
  timerDisplay.textContent = formatTime(seconds);
}

startButton.addEventListener('click', () => {
  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
  }
});

stopButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    timerDisplay.textContent = "00:00:00";
});
