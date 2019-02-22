/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var numsSorted = nums.map((e, i) => ({
    value: e,
    idx: i
  })).sort((a, b) => a.value - b.value),
    il = 0,
    ir = nums.length - 1
  while (il <= ir) {
    if (numsSorted[il].value + numsSorted[ir].value === target) {
      var idx1 = numsSorted[il].idx
      var idx2 = numsSorted[ir].idx
      return [idx1, idx2]
    } else if (numsSorted[il].value + numsSorted[ir].value > target) {
      ir--
    } else {
      il++
    }
  }
  return null
};

var nums = [1, 9, 3, 2, 6]
var target = 8
var ans = twoSum(nums, target)
console.log(ans)
