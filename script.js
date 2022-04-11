'use strict';
let inputNumber = document.getElementById('inputNumber');
let correctAnswer = document.getElementById('correctAnswer');
let checkButton = document.getElementById('checkButton');
let gameStatus = document.getElementById('gameStatus');
let againButton = document.getElementById('againButton');
let scoreCounter = document.getElementById('scoreCounter');
let higherScore = document.getElementById('higherScore');
let resetButton = document.getElementById('resetButton');

let hiddenNumber = Math.round(Math.random() * 20);

if (hiddenNumber == 0) {
  hiddenNumber += 1;
}
console.log(hiddenNumber);

let scoreCounterNum = Number(document.getElementById('scoreCounter').innerHTML);
if (localStorage.getItem('GussNumber')) {
  var storedHigherScore = JSON.parse(localStorage.getItem('GussNumber'));
  higherScore.innerHTML = storedHigherScore;
} else {
  storedHigherScore = 0;
  var higherScoreNum = Number(document.getElementById('higherScore').innerHTML);
}

checkButton.addEventListener('click', compare);
function compare() {
  let userNumber = Number(inputNumber.value);
  if (userNumber == hiddenNumber) {
    theCorrecrAnswer();
  } else {
    inCorrecrAnswer(userNumber);
  }
}

function theCorrecrAnswer() {
  gameStatus.innerHTML = '🥇  Correct Number!';
  document.body.style.backgroundColor = '#60b347';
  correctAnswer.innerHTML = hiddenNumber;
  if (higherScoreNum > storedHigherScore) {
    localStorage.setItem('GussNumber', JSON.stringify(higherScoreNum));
    higherScoreNum = scoreCounterNum;
  }
}

function inCorrecrAnswer(userNumber) {
  if (userNumber > hiddenNumber) {
    gameStatus.innerHTML = 'Too High?';
  } else if (userNumber < hiddenNumber) {
    gameStatus.innerHTML = 'Too low?';
  }
  scoreCounterNum -= 1;
  scoreCounter.innerHTML = scoreCounterNum;
  higherScoreNum = scoreCounterNum;
}

againButton.addEventListener('click', function () {
  location.reload();
});

resetButton.addEventListener('click', function(){
    localStorage.removeItem('GussNumber');
    location.reload();
})