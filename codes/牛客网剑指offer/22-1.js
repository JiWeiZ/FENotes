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
  let stack = [root], count = 0, arr = []
  function bfs() {
    let currentNode = stack[count]
    if (currentNode) {
      arr.push(currentNode.val)
      console.log(`arr = [${arr}]`)
      if (currentNode.left) {
        stack.push(currentNode.left)
        console.log(`stack = [${stack.map(e => e.val)}]`)
      }
      if (currentNode.right) {
        stack.push(currentNode.right)
        console.log(`stack = [${stack.map(e => e.val)}]`)
      }
      count++
      bfs()
    }
  }
  bfs()
  return arr
}

console.log(PrintFromTopToBottom(root))
