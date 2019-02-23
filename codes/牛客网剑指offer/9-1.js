function jumpFloorII(number) {
  // write code here
  if (number < 0) return null
  if (number <= 2) return number
  var arr = [1, 2], temp
  for (var i = 2; i < number; i++) {
    temp = arr.reduce((p, c) => p + c) + 1
    arr.push(temp)
  }
  return arr.pop()
}
