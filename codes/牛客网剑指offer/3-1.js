function ListNode(x) {
  this.val = x;
  this.next = null;
}
var head = new ListNode(0)
var l1 = new ListNode(1)
var l2 = new ListNode(2)
var l3 = new ListNode(3)
var l4 = new ListNode(4)
head.next = l1
l1.next = l2
l2.next = l3
l3.next = l4
function printListFromTailToHead(head) {
  // write code here
  var res = [], currentNode = head
  while (currentNode !== null) {
    res.push(currentNode.val)
    currentNode = currentNode.next
  }
  return res.reverse()
}
console.log(printListFromTailToHead(head))
