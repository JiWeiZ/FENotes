var pushV = [1,2,3,4,5]
var popV = [3,4,5,1,2]

function IsPopOrder(pushV, popV) {
  // write code here
  if (!pushV.length) return false
  var s = []
  for (var i = 0, j = 0;i < pushV.length;) {
    s.push(pushV[i++])
    while(j < popV.length && s[s.length - 1] === popV[j]) {
      s.pop()
      j++
    }
  }
  return !s.length
}

console.log(IsPopOrder(pushV, popV))
