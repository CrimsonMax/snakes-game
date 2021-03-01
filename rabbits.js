import { onTree } from "./forest.js"
import { randomGridPosition } from "./grid.js"
import { expandSnake, onSnake } from "./snake.js"

let rabbit = getRandomRabbitPosition()
const EXPANSION_RATE = 1
export let SNAKE_SPEED = 5
export let score = 0

setInterval(() => rabbit = getRandomRabbitPosition(), 5000)

export function update() {
  if (onSnake(rabbit)) {
    expandSnake(EXPANSION_RATE)
    rabbit = getRandomRabbitPosition()
    SNAKE_SPEED++
    score++
  }
}

export function draw(gameBoard) {
  const rabbitElement = document.createElement('div')
  rabbitElement.style.gridRowStart = rabbit.y
  rabbitElement.style.gridColumnStart = rabbit.x
  rabbitElement.classList.add('rabbit')
  gameBoard.appendChild(rabbitElement)
}

function getRandomRabbitPosition() {
  let newRabbitPosition
  while (newRabbitPosition == null || onSnake(newRabbitPosition) || onTree(newRabbitPosition)) {
    newRabbitPosition = randomGridPosition()
  }
  return newRabbitPosition
}