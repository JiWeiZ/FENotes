// var sequence = [3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]
var sequence = [1, 2, 3, 4, 5]

function VerifySquenceOfBST(sequence) {
  // write code here
  if (sequence.length === 0) return false
  function verifyRec(sequence) {
    // write code here
    if (sequence.length === 0) return true
    if (sequence.length <= 2) return true
    if (sequence.length === 3) {
      if (sequence[1] > sequence[0]  // 如 [2,4,3]
        && sequence[1] > sequence[2]
        && sequence[2] > sequence[0]
        || sequence[0] > sequence[1] // 如 [4,3,2]
        && sequence[1] > sequence[2]
        || sequence[2] > sequence[1] // 如 [2,3,4]
        && sequence[1] > sequence[0]) {
        return true
      } else {
        return false
      }
    }
    var root = sequence.pop()
    var flag = true, left = [], right = []
    for (var i = 0; i < sequence.length; i++) {
      var v = sequence[i]
      if (flag) {
        if (v > root) {
          flag = false
          right.push(v)
        } else {
          left.push(v)
        }
      } else {
        if (v < root) return false
        right.push(v)
      }
    }
    return verifyRec(left) && verifyRec(right)
  }
  return verifyRec(sequence)
}



console.log(verifyRec(sequence))
