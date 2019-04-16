## 柯里化

柯里化是什么？

比如说一个函数A期望获得2个参数，给A函数传递2个参数就能得到我们想要的结果

```js
function A (x, y) {
    // c = combination of x and y
    return c
}
```

现在我们定义一个函数B，这个函数B只接受1个参数，函数B的返回值是一个新函数C；函数C也接受1个参数，然后在函数C里我们调用函数A，返回最终结果。

```js
function A (x, y) {
    // c = combination of x and y
    return c
}

function B(x) {
    return function C(y) {
        return A(x, y)
    }
}

var x1, x2, y1, y2
var C1 = B(x1)
var C2 = B(x2)
var result1 = C1(y1) // result1 === A(x1, y1)
var result2 = C2(y2) // result1 === A(x2, y2)
```

举个实际的例子：

```js
function add (x, y) {
    return x + y
}

function curry (x) {
    return function (y) {
        return add (x, y)
    }
}

var addTen = curry(10)
var increase = curry(1)

addTen(2) // 12
increase(2) // 3
```

add函数是A函数，curry函数是B函数，addTen和increase可以认为是C1，C2函数。

再举个例子：

```js
function match(regex, str) {
    return str.match(regex)
}
function carriedMatch(regex) {
    return function (str) {
        return match(regex, str)
    }
}
var matchW = carriedMatch(/W/g)
console.log(matchW('Hello World'))
console.log(matchW('Hello JS'))

var matchSpace = carriedMatch(/\s+/g)
var hasSpace = (str) => !!matchSpace(str)
    
console.log(hasSpace('Hello World'))
console.log(hasSpace('HelloJS'))
```



