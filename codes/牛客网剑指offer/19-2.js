var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

// var matrix = [
//   [1,2,3],
//   [4,5,6]
// ]

// var matrix = [
//   [1],
//   [2],
//   [3],
//   [4]
// ]

// ↑↓←→

function printMatrix(matrix) {
  // write code here
  var res = []
  function notBlank (matrix) {
    return !matrix.every(e => e.length === 0)
  }
  while (notBlank(matrix)) {
    // 1
    res = res.concat(matrix.shift())
    // 2
    if (notBlank(matrix) && matrix[0].length) {
      for (var row of matrix) {
        res.push(row.pop())
      }
    }
    // 3
    if (notBlank(matrix)) {
      var tmp = matrix.pop()
      res = res.concat(tmp.reverse())
    }
    // 4
    if (notBlank(matrix) && matrix[0].length) {
      for (var v = matrix.length - 1; v >= 0; v--) {
        res.push(matrix[v].shift())
      }
    }
  }
  return res
}
var res = printMatrix(matrix)
console.log(res)
