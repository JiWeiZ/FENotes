/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 首先定义一个对象作为缓存
  var map = {}
  for (var i = 0; i < nums.length; i++) {
      // 如果 target - nums[i] 已经在缓存中，则配对成功
      if (map[target - nums[i]] !== undefined) {
          return [map[target - nums[i]], i]
      }
      // 缓存，键名是读取到的内容，值是要返回的索引
      map[nums[i]] = i
  }
};

var nums = [1, 9, 3, 2, 6]
var target = 8
var ans = twoSum(nums, target)
console.log(ans)
