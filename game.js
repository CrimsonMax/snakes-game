import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateRabbit, draw as drawRabbit } from './rabbits.js'
import { outSideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) { // game over screen
    if (confirm('You Lost! Try again?')) {
      window.location = '/'
    } 
    return
  }
  
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
 updateSnake()
 updateRabbit()
 checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawRabbit(gameBoard)
  // tree!
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeIntersection() // tree!
}