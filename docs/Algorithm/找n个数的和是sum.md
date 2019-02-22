# 找n个数的和是sum

## 2数和是sum

思路：第1个数遍历，第2个数采用二分搜索，复杂度O(nlogn)

二分搜索要求数组必须是排序的，但是数组排序后索引值就变了，比如我target = 6, nums = [3,2,5,4,7]，期望是输出是[1,3]，但实际的输出是[0, 2]。所以这不是一个好方法

### 法一

```js
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
}
```

空间复杂度O(n)，时间复杂度O(n)

### 法二



