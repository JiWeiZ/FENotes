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

function FindKthToTail(head, k) {
  // write code here
  if (!head || !head.next) return {}
  var p1 = head, p2 = head
  for (var i = 0; i < k - 1; i++) {
    if (p2.next === null) {
      return {}
    }
    p2 = p2.next
  }
  while (p2.next) {
    p1 = p1.next
    p2 = p2.next
  }
  return p1
}

console.log(FindKthToTail(head, 6))
