export const tree = [
  { x1: 5, x2: 8, y1: 3, y2: 6 },
  { x1: 3, x2: 6, y1: 10, y2: 13 },
  { x1: 5, x2: 8, y1: 17, y2: 20 },
  { x1: 15, x2: 18, y1: 3, y2: 6 },
  { x1: 17, x2: 20, y1: 10, y2: 13 },
  { x1: 15, x2: 18, y1: 17, y2: 20 },
]

export function drawTrees(gameBoard) {
  tree.forEach(segment => {
    const treeElement = document.createElement('div')
    treeElement.style.gridRowStart = segment.y1
    treeElement.style.gridRowEnd = segment.y2
    treeElement.style.gridColumnStart = segment.x1
    treeElement.style.gridColumnEnd = segment.x2
    treeElement.classList.add('tree')
    gameBoard.appendChild(treeElement)
  })
}

export function onTree(position) {
  return (
    (position.x > 4 && position.x < 8) && (position.y > 2 && position.y < 6) ||
    (position.x > 2 && position.x < 6) && (position.y > 9 && position.y < 13) ||
    (position.x > 4 && position.x < 8) && (position.y > 16 && position.y < 20) ||
    (position.x > 14 && position.x < 18) && (position.y > 2 && position.y < 6) ||
    (position.x > 16 && position.x < 20) && (position.y > 9 && position.y < 13) ||
    (position.x > 14 && position.x < 18) && (position.y > 16 && position.y < 20)
  )
}