function ListNode(x) {
  this.val = x;
  this.next = null;
}
function arrToList(arr) {
  var head = new ListNode(arr[0])
  var arrNode = arr.slice(1).map(e => new ListNode(e))
  arrNode.reduce((p, c) => p.next = c, head)
  return head
}
var pHead1 = arrToList([1, 3, 5])
var pHead2 = arrToList([2, 3, 5, 6])

function Merge(pHead1, pHead2) {
  // write code here
  var newHeadPre = new ListNode(-Infinity),
    c = newHeadPre
  while (pHead1 !== null && pHead2 !== null) {
    if (pHead1.val < pHead2.val) {
      c.next = pHead1
      pHead1 = pHead1.next
    } else {
      c.next = pHead2
      pHead2 = pHead2.next
    }
    c = c.next
  }
  c.next = pHead1 !== null ? pHead1 : pHead2
  return newHeadPre.next
}

var newHead = Merge(pHead1, pHead2)
console.log(newHead)
