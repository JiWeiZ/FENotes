var minStack = []
var stack = []
function push(node)
{
    // write code here
    if (minStack.length === 0) {
        minStack.push(node)
    } else {
        if (node < minStack[minStack.length - 1]) {
            minStack.push(node)
        }
    }
    stack.push(node)
}
function pop()
{
    // write code here
    stack.pop()
}
function top()
{
    // write code here
    return stack[stack.length - 1]
}
function min()
{
    // write code here
    return minStack[minStack.length - 1]
}
