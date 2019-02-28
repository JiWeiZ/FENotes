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

var root = arrToBST([11, 7, 15, 5, 9, 13, 20])

function PrintFromTopToBottom(root) {
  // write code here
  var list = [], stack = [root]
  if (root === null) return list
  while (stack.length) {
    var tmp = stack.pop()
    list.push(tmp.val)
    if (tmp.right !== null) stack.push(tmp.right)
    if (tmp.left !== null) stack.push(tmp.left)
  }
  return list
}

console.log(PrintFromTopToBottom(root))
