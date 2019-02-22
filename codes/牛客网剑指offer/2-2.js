function replaceSpace(str)
{
    // write code here
    var arr = str.split('')
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === ' ') {
        arr[i] = '%20'
      }
    }
    return arr.join('')
}

var str = 'We Are Happy'
console.log(replaceSpace(str))
