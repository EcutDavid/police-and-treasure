// Values in map => 0: road, 1: wall, 2: treasure, 3: police

function searchTreasure(pos, map) {
  const mapHeight = map.length
  const mapWidth = map[0].length
  let nodes = [pos]
  // Use this dictionary for prevent visit same point two times
  let visitedPos = {}

  while (nodes.length) {
    const { x, y } = nodes.shift()
    visitedPos[`${x}_${y}`] = true
    // Yeah, we find the treasure
    if (map[y][x] === 2) return { x, y }


    const pushNode = ({x, y}) => {
      if (map[y][x] !== 1 && !visitedPos[`${x}_${y}`]) {
        nodes.push({ x, y })
        visitedPos[`${x}_${y}`] = true
      }
    }
    // Four directions
    if (x - 1 > -1) pushNode({ x: x - 1, y })
    if (x + 1 < mapWidth) pushNode({ x: x + 1, y })
    if (y - 1 > -1) pushNode({ x, y: y - 1 })
    if (y + 1 < mapHeight) pushNode({ x, y: y + 1 })
  }
  // Noooooooo
  return undefined
}

var testCase = [
  [0, 0],
  [0, 2],
]
console.log(searchTreasure({x: 0, y: 0},testCase))
