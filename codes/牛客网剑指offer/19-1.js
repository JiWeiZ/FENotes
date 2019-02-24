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
  var m = matrix.length,
    n = matrix[0].length,
    dv = 0,
    dh = 1,
    v = 0,
    h = 0,
    vt = 1,     // vertical top boundary
    vb = m - 1, // vertical bottom boundary
    hl = 0,     // horizontal left boundary
    hr = n - 1  // horizontal right boundary
    res = []
  for (var t = 0; t < m * n; t++) {
    if (h === hr && dh === 1) { // →
      [hr, dv, dh] = [hr - 1, 1, 0]
    } else if (v === vb && dv === 1) { // ↓
      [vb, dv, dh] = [vb - 1, 0 , -1]
    } else if (h === hl && dh === -1) { // ←
      [hl, dv, dh] = [hl + 1, -1, 0]
    } else if (v === vt && dv === -1) { // ↑
      [vt, dv, dh] = [vt + 1, 0, 1]
    }
    res.push(matrix[v][h])
    v += dv
    h += dh
  }
  return res
}
var res = printMatrix(matrix)
console.log(res)
