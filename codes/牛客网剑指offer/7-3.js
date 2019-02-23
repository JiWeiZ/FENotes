function Fibonacci(n, n1 = 0, n2 = 1) {
  // write code here
  console.log(`n1 = ${n1}, n2 = ${n2}`)
  if (n === 0) return 0
  if (n === 1) return n2
  return Fibonacci(n - 1, n2, n1 + n2)
}

var n5 = Fibonacci(5)
console.log(n5)
