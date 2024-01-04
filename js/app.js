


/*-------- Constants --------*/


/*-------- Variables (State) --------*/

let secretNum, guessList, isWinner


/*-------- Cached Element References --------*/

const form = document.querySelector('form')
const guessInput = document.querySelector('#guess-input')
const guessesEl = document.querySelector('#prev-guesses')
const messageEl = document.querySelector('#message')
const resetBtn = document.querySelector('#reset-button')
const prevGuessMsg = document.querySelector('#prev-guesses-msg')




/*-------- Event Listeners --------*/


/*-------- Functions --------*/

init()

function init() {
    guessesEl.textContent = ''
    messageEl.textContent = 'Enter a guess between 1 and 100'
    resetBtn.setAttribute('hidden', true)
    prevGuessMsg.textContent = ''
    guessList = []
    isWinner = false
    secretNum = Math.floor(Math.random() * 100 + 1)
    console.log(secretNum)
}