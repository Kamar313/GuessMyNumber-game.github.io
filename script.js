'use strict';
// console.log(document.querySelector(`.between`).textContent);
// document.querySelector(`.between`).textContent = `You are right`;
// document.querySelector(`.number`, `.score`).textContent = 17;
// document.querySelector(`.score`).textContent = 17;
let getNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// console.log(getNumber);

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  //   console.log(guess, typeof guess);
  // If no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `Not a Number`;
  }

  // If code is Correct
  else if (getNumber === guess) {
    document.querySelector(`.number`).textContent = getNumber;
    document.querySelector(`.message`).textContent = `Correct Number`;
    document.querySelector(`body`).style.backgroundColor = `green`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = score;
    }
  }

  //If Number is high
  else if (getNumber < guess) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Number is High`;
      score = score - 1;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You loose the game`;
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `red`;
    }
  }

  // If Number is low
  else if (getNumber > guess) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Number is Low`;
      score = score - 1;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `you loose the game`;
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `red`;
    }
  }
});

// Reset button for all as it is
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  getNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`body`).style.backgroundColor = `black`;
  document.querySelector(`.guess`).value = ``;
});
