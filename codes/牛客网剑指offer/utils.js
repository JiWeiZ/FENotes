function arrToBST(arr) {
  function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
  function insertNode(node, val) {
    if (node === null) {
      node = new TreeNode(val)
    } else if (val < node.val) {
      node.left = insertNode(node.left, val)
    } else {
      node.right = insertNode(node.right, val)
    }
    return node
  }
  var root = null
  arr.forEach(e => root = insertNode(root, e))
  return root
}

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

module.exports = {
  arrToBST,
  arrToList
}
