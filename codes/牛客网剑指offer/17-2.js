/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
  // write code here
  function convert (p) {
    return p ? p.val.toString() + convert(p.left) + convert(p.right) : ''
  }
  return pRoot2 ? convert(pRoot1).includes(convert(pRoot2)) : false
}
