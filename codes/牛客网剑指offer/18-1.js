function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function arrToBST(arr) {
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

var root = arrToBST([4,2,1])

function Mirror(root) {
  // write code here
  if (root === null) return null
  if (root.left || root.right) {
    var left = Mirror(root.right)
    var right = Mirror(root.left)
    root.left = left
    root.right = right
  }
  return root
}

var rootMir = Mirror(root)
console.log(rootMir)
