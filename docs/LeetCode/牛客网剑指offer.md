# 牛客网剑指offer

## [二维数组中的查找](https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13&tqId=11154&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

思路：该矩阵从左到右递增，从下到上递减，于是从最左下角开始，比目标大向上移动，比目标小就向右移动

```js
function Find(target, array)
{
    // write code here
    var i = array.length - 1, j = 0
    while (i >= 0 && j < array[i].length) {
        if (array[i][j] < target) {
            j++
        } else if (array[i][j] > target) {
            i--
        } else {
            return true
        }
    }
    return false
}
```

## [替换空格](https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423?tpId=13&tqId=11155&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

### 法一

直接用正则

```js
function replaceSpace(str)
{
    // write code here
    return str.replace(/ /g, '%20')
}
```

### 法二

```js
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
```

## [从尾到头打印链表](https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&tqId=11156&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

思路：

1. head存在吗？head有next吗？没有就直接return []
2. 现在的node有next吗？有！那就递归。（假装现在递归执行完了，那我就得到了一个从尾开始是数组，现在我把当前node.val给push进去，在返回这个arr，给后面的递归用。）
3. 现在的node有next吗？没有！停止递归，把val给push到arr里，返回arr

```js
function printListFromTailToHead(head) {
  // 考虑边界情况
  if (!head || !head.next) return []
  // arr在递归函数外边，闭包
  var arr = []
  function pRec(node) {
    // 当node.next存在时才递归
    if (node.next !== null) {
      // 拿到递归后的arr
      arr = pRec(node.next)
    }
    // 把自己的val给push进去，返回arr
    arr.push(node.val)
    return arr
  }
  return pRec(head)
}
```

