import { score } from "./rabbits.js"

const winWindow = document.getElementById('winMessage')
const winText = document.querySelector('[data-win-text]')


export function endGame() {
  winText.innerText = `You ate ${score} rabbits! Try again?`
  winWindow.classList.add('show')
}