import { randomGridPosition } from "./grid.js"
import { expandSnake, onSnake, SNAKE_SPEED } from "./snake.js"

let rabbit = getRandomRabbitPosition()
const EXPANSION_RATE = 1

export function update() {
  if (onSnake(rabbit)) {
    expandSnake(EXPANSION_RATE)
    rabbit = getRandomRabbitPosition() // increase speed
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
  while (newRabbitPosition == null || onSnake(newRabbitPosition)) { // tree!
    newRabbitPosition = randomGridPosition()
  }
  return newRabbitPosition
}