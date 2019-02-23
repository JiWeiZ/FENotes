function reOrderArray(arr) {

  function reOrderArrayRec(arr) {
    var len = arr.length
    if (len === 0 || len === 1) {
      return arr
    } else if (len === 2) {
      return arr[0] % 2 === 0 && arr[1] % 2 !== 0 ? arr.reverse() : arr
    } else {
      var midIdx = Math.floor(len / 2),
        left = arr.slice(0, midIdx),
        right = arr.slice(midIdx, len)
      return merge(reOrderArrayRec(left), reOrderArrayRec(right))
    }
  }

  function merge(left, right) {
    var res = [], il = 0, ir = 0
    while (il < left.length && ir < right.length) {
      while (left[il] % 2 !== 0 && il < left.length) {
        res.push(left[il++])
      }
      while (right[ir] % 2 !== 0 && ir < right.length) {
        res.push(right[ir++])
      }
      while (il < left.length) {
        res.push(left[il++])
      }
      while (ir < right.length) {
        res.push(right[ir++])
      }
    }
    return res
  }

  return reOrderArrayRec(arr)
}
var arr = [6, 1, 8, 3, 4]
console.log(reOrderArray(arr))
