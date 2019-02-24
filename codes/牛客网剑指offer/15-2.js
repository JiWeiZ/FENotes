function arrToList(arr) {
  function ListNode(x) {
    this.val = x;
    this.next = null;
  }
  var head = new ListNode(arr[0])
  var arrNode = arr.slice(1).map(e => new ListNode(e))
  arrNode.reduce((p, c) => p.next = c, head)
  return head
}
var pHead = arrToList([4,3, 2,1, 0])

function ReverseList(pHead) {
  // write code here
  function ReverseRec(c) {
    // 链表长度为0
    if (!c) return null
    // 链表长度为1
    if (c.next === null) return c
    // 链表长度为2
    if (c.next.next === null) {
      var n = c.next
      c.next.next = c
      c.next = null
      return n
    }
    // 链表长度大于2，先递归处理c.next
    c.next = ReverseRec(c.next)
    // 获取链表尾部t (tail)
    var t = c
    while (t.next) {
      t = t.next
    }
    // 尾部执行c
    t.next = c
    // 缓存当前c.next，准备返回
    var n = c.next
    // c.next 现在是尾部，指向null
    c.next = null
    return n
  }
  return ReverseRec(pHead)
}

var pHeadRev = ReverseList(pHead)
console.log(pHeadRev)
