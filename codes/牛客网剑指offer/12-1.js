function Power(base, exponent) {
  // write code here
  if (exponent === 0) {
    return 1
  } else if (exponent < 0) {
    if (base === 0) throw Error('指数小于0时，底数不能为0')
    var n = -1 * exponent
  } else {
    var n = exponent
  }
  var res = 1, curr = base
  while (n !== 0) {
    if (n & 1) {
      res *= curr
    }
    curr *= curr
    n >>= 1
  }
  return exponent > 0 ? res : (1 / res)
}

console.log(Power(4,-2))
