const initialGen = [
  [0, 1, 1],
  [1, 0, 0],
  [0, 0, 1],
];

function generateNewGeneration(initialGen) {
  const rows = initialGen.length;
  const columns = initialGen[0].length;
  let newGen = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      var neighborsAlive = 0;
      neighborsAlive = countNeighborsAlive(i, j, rows, columns);

      if (
        initialGen[i][j] === 1 &&
        (neighborsAlive < 2 || neighborsAlive > 3)
      ) {
        newGen[i][j] = 0;
      } else if (initialGen[i][j] === 0 && neighborsAlive === 3) {
        newGen[i][j] = 1;
      } else {
        newGen[i][j] = initialGen[i][j];
      }
    }
  }
  return newGen;
}

function countNeighborsAlive(i, j, rows, columns) {
  var neighborsAlive = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (x === 0 && y === 0) continue;
      let newX = i + x;
      let newY = j + y;
      if (newX >= 0 && newX < rows && newY >= 0 && newY < columns) {
        neighborsAlive += initialGen[newX][newY];
      }
    }
  }
  return neighborsAlive;
}

const newGen = generateNewGeneration(initialGen);
console.log(newGen);
