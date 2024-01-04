/*-------- Constants --------*/

/*-------- Variables (State) --------*/

let secretNum, guessList, isWinner;

/*-------- Cached Element References --------*/

const form = document.querySelector("form");
const guessInput = document.querySelector("#guess-input");
const guessesEl = document.querySelector("#prev-guesses");
const messageEl = document.querySelector("#message");
const resetBtn = document.querySelector("#reset-button");
const prevGuessMsg = document.querySelector("#prev-guesses-msg");

/*-------- Event Listeners --------*/

form.addEventListener("reset", init);

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  // Only if there's not a winner, run the next bit of code
  if (!isWinner) {
    // Check the guess
    checkGuess(parseInt(guessInput.value));
  }
});

/*-------- Functions --------*/

init();

function checkGuess(guess) {
  console.log(guess, " current guess");
  guessInput.value = "";
  if (isNaN(guess) || guess < 1 || guess > 100) {
    renderError('Please enter a number between 1 and 100')
    return
  } else if (guess === secretNum) {
    // Winner
    isWinner = true
  }
  guessList.push(guess);
  console.log(guessList)
}

function renderError(error) {
    messageEl.className = 'error'
    messageEl.textContent = 'error'
}

function init() {
  guessesEl.textContent = "";
  messageEl.textContent = "Guess a number between 1 and 100.";
  resetBtn.setAttribute("hidden", true);
  prevGuessMsg.textContent = "";
  guessList = [];
  isWinner = false;
  secretNum = Math.floor(Math.random() * 100 + 1);
  console.log(secretNum, " secret num");
}
