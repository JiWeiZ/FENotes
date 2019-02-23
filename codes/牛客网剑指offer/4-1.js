function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function reConstructBinaryTree(pre, vin) {
  // write code here
  if (vin.length === 0) return null
  var root = new TreeNode(pre[0])
  var rootIdxInVin = vin.indexOf(root.val)
  var vinLeft = vin.slice(0, rootIdxInVin)
  var vinRight = vin.slice(rootIdxInVin + 1, vin.length)
  var preLeft = pre.slice(1, vinLeft.length + 1)
  var preRight = pre.slice(vinLeft.length + 1, pre.length)
  root.left = reConstructBinaryTree(preLeft, vinLeft)
  root.right = reConstructBinaryTree(preRight, vinRight)
  return root
}

var pre = [1,2,4,7,3,5,6,8],
  vin = [4,7,2,1,5,3,8,6]

var root = reConstructBinaryTree(pre, vin)
