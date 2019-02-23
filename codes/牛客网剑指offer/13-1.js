function reOrderArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] % 2 === 0 && arr[j + 1] % 2 !== 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
var arr = [6, 1, 8, 3, 4]
console.log(reOrderArray(arr))
