function reOrderArray(arr) {
  var len = arr.length, j, current
  for (var i = 0; i < len; i++) {
    j = i
    current = arr[i]
    if (current % 2 === 0) continue
    while (j > 0 && arr[j - 1] % 2 === 0) {
      arr[j] = arr[j - 1]
      j--
    }
    if (j !== i) arr[j] = current
  }
  return arr
}
var arr = [6,1,8,3,4]
console.log(reOrderArray(arr))
