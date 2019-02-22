// 失败的方法
var twoSum = function (nums, target) {

  function binarySearch(target, arrSorted, il, ir) {
    var mid
    while (il <= ir) {
      mid = Math.floor((il + ir) / 2)
      if (arrSorted[mid] < target) {
        il = mid + 1
      } else if (arrSorted[mid] > target) {
        ir = mid - 1
      } else {
        return mid
      }
    }
    return null
  }

  var arrSorted = nums.sort((a, b) => a - b),
    len = arrSorted.length

  for (var i = 0; i < arrSorted.length; i++) {
    var another = binarySearch(target - arrSorted[i], arrSorted, i + 1, len - 1)
    if (another) {
      return [i, another]
    }
  }

  return null
};

var nums = [3,2,5,4,7]
var target = 6
var ans = twoSum(nums, target)
console.log(ans)
