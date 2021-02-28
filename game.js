import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateRabbit, draw as drawRabbit, SNAKE_SPEED } from './rabbits.js'
import { outSideGrid } from './grid.js'
import { drawTrees } from './forest.js'
import { endGame } from './gameover.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

const restart = document.getElementById('restartBtn')


function main(currentTime) {
  if (gameOver) { // game over screen
    endGame()
    restart.addEventListener('click', () => window.location = '/')
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
  drawTrees(gameBoard)
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}