const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

let timerId;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackColor() {
    const colorInd = randomIntegerFromInterval(0, colors.length - 1);
    bodyRef.style.backgroundColor = colors[colorInd];
 };

function startBtnClick() {
    timerId = setInterval(changeBackColor, 1000);
    startBtnRef.disabled = true;
};
 
function stopBtnClick() {
    clearInterval(timerId);
    startBtnRef.disabled = false;
};
 
startBtnRef.addEventListener('click', startBtnClick);
stopBtnRef.addEventListener('click', stopBtnClick);