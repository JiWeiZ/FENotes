// 实现
// var result = sum(1)(2)(3)...(n)();
// console.log(result);

var sum1 = function (a) {
  var sum = 0
  sum += a
  return function temp (b) {
    if (arguments.length) {
      sum += b
      return temp
    } else {
      return sum
    }
  }
}

var sum2 = function (a) {
  var arr = []
  arr.push(a)
  return function temp (b) {
    if (arguments.length) {
      arr.push(b)
      return temp
    } else {
      return arr.reduce((p, c) => p + c)
    }
  }
}

var result = sum2(1)(2)(3)();
console.log(result);
