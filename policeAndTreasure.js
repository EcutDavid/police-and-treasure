// Values in map => 0: road, 1: wall, 2: treasure, 3: police

function searchTreasure(pos, map) {
  const mapHeight = map.length
  const mapWidth = map[0].length
  let nodes = [pos]
  // Use this dictionary for prevent visit same point two times
  const visitedPos = {}

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

function searchMap(map) {
  const polices = []
  const mapHeight = map.length
  const mapWidth = map[0].length
  for (let i = 0; i < mapHeight; i++) {
    for (let j = 0; j < mapWidth; j++) {
      if (map[i][j] === 3) polices.push({ y: i, x: j })
    }
  }

  const policeCount = polices.length
  const res = []
  for (let i = 0; i < policeCount; i++) {
    const treasurePos = searchTreasure(polices[i], map)
    res.push({ policePos: polices[i], treasurePos })
  }
  return res
}



let counter = 0
function test(testCase) {
  console.log("*********************")
  console.log(`Test case ${++counter}:`)
  for (let i = 0; i < testCase.length; i++) {
    console.log(testCase[i])
  }

  console.log("Result:")
  console.log(searchMap(testCase))
}

const testCase1 = [
  [0, 0, 1],
  [2, 0, 3],
  [2, 0, 3]
]
const testCase2 = [
  [0, 0, 1, 0, 0],
  [2, 0, 1, 1, 3],
  [2, 0, 0, 0, 3]
]
const testCase3 = [
  [0, 0, 1, 0, 0],
  [2, 0, 1, 1, 3],
  [2, 0, 0, 0, 3],
  [1, 0, 0, 1, 1],
  [1, 0, 0, 1, 3],
]
const testCase4 = [
  [0, 0, 1, 0, 0],
  [1, 0, 1, 1, 3],
  [1, 0, 0, 0, 3],
  [1, 0, 0, 1, 1],
  [1, 0, 0, 1, 3],
]
const testCase5 = [
  [0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0],
]

test(testCase1)
test(testCase2)
test(testCase3)
test(testCase4)
test(testCase5)
