function Fibonacci(n) {
  // write code here
  if (n < 0) return null
  if (n === 0) return 0
  if (n === 1) return 1
  var n1 = 0, n2 = 1
  while (--n) {
    n2 = n1 + n2
    n1 = n2 - n1
  }
  return n2
}

var n5 = Fibonacci(5)
console.log(n5)
