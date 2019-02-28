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
root.left.val = 13
root.left.right.val = 14
root.right.left.val = 12

function FindPath (root, expectNumber) {
  var listAll = [], list = []
  function FindPathRec(root, expectNumber) {
    // write code here
    if (root === null) return []
    list.push(root.val)
    expectNumber -= root.val
    if (expectNumber === 0 && root.left === null && root.right === null) {
      listAll.push(list.concat())
    }
    FindPathRec(root.left, expectNumber)
    FindPathRec(root.right, expectNumber)
    list.pop()
  }
  FindPathRec(root, expectNumber)
  return listAll
}



FindPathRec(root, 38)
console.log(listAll)
