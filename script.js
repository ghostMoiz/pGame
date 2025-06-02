'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    console.log('player changed');

    // document
    //   .querySelector(`.player--${activePlayer}`)
    //   .classList.remove('player--active');

    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    // document
    //   .querySelector(`.player--${activePlayer}`)
    //   .classList.add('player--active');

    currentScore = 0;
    // document.getElementById(`current--${activePlayer}`).textContent =
    current0El.textContent = 0;
    current1El.textContent = 0;
    console.log('active player' + activePlayer);
  }

  //   if (dice !== 1 && activePlayer === 0) {
  //     currentScore += dice;
  //     current0El.textContent = currentScore;
  //   } else if (dice === 1 && activePlayer === 0) {
  //     activePlayer = 1;
  //     currentScore = 0;
  //   } else if (dice !== 1 && activePlayer === 1) {
  //     currentScore += dice;
  //     current1El.textContent = currentScore;
  //   } else if (dice === 1 && activePlayer === 1) {
  //     activePlayer = 0;
  //     currentScore = 0;
  //   }
});

btnHold.addEventListener('click', function () {
  score[activePlayer] = score[activePlayer] + currentScore;
  console.log(score[activePlayer]);
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];

  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log('player changed' + activePlayer);

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  current0El.textContent = 0;
  current1El.textContent = 0;
});
