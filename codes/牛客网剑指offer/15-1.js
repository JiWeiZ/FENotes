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
var pHead = arrToList([4, 3, 2, 1, 0])

function ReverseList(pHead) {
  // write code here
  if (!pHead) return null
  var p = null, c = pHead, n = pHead.next
  while (n !== null) {
    c.next = p
    p = c
    c = n
    n = n.next
  }
  c.next = p
  return c
}

var pHeadRev = ReverseList(pHead)
console.log(pHeadRev)
