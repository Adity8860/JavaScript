let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const gussSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGusses = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateguess(guess);
  });
}
addEventListener;
function validateguess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    preGusses.push(guess);
    if (numGuess === 11) {
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomNumber) {
    displayMessage("Congratulation you guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("You guessed too low");
  } else if (guess > randomNumber) {
    displayMessage("You guessed too high");
  }
}
function displayguess(guess) {
  userInput.value = "";
  gussSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
  const newGameButton = newGame();
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGusses = [];
    numGuess = 1;
    gussSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    lowOrHi.innerHTML = "";
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = "";
  randomNumber = parseInt(Math.random() * 100 + 1);

  preGusses = [];
  numGuess = 1;
  gussSlot.innerHTML = "";
  remaining.innerHTML = `${11 - numGuess}`;
 
  userInput.removeAttribute("disabled");
  startOver.appendChild(p);
  playGame = true;
 }
