# 几个值得期待的JS新特性

## 关于提案

提案有五个阶段，详看介绍文档 https://tc39.github.io/process-document/ 。

| Stage | Purpose   | Post-Acceptance Changes Expected                             |
| ----- | --------- | ------------------------------------------------------------ |
| 0     | Strawman  | N/A                                                          |
| 1     | Proposal  | None                                                         |
| 2     | Draft     | Draft: all *major* semantics, syntax and API are covered, but TODOs,<br /> placeholders and editorial issues are expected |
| 3     | Candidate | Complete: all semantics, syntax and API are completed described |
| 4     | Finished  | Final: All changes as a result of implementation experience are integrated |

## 关于babel

> As of Babel v7, all the stage presets have been deprecated. Check [the blog post](https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets) for more information.
>
> For upgrade instructions, see [the README](https://github.com/babel/babel/blob/master/packages/babel-preset-stage-0/README.md).

## 可选运算符

在JavaScript中，我们一直在使用对象，但有时候对象里并不是我们期望的数据结构。假设下面是我们期望得到的数据，可能是通过调用API查询数据库得到的。

```js
const data = {
  user: {
    address: {
      street: 'main street',
      neighbors: [
        'john doe',
        'jane doe',
      ],
    },
    getNeighbors() {
      return this.address.neighbors;
    }
  },
};
```

如果该用户没有完成注册，可能得到下面的数据：

```js
const data = {
  user: {}
};
```

当尝试按下面的方式访问street时，会得到报错：

```js
console.log(data.user.address.street);
// Uncaught TypeError: Cannot read property 'street' of undefined
```

为避免这种情况，需要按如下方式访问“street”属性：

```js
const street = data && data.user && data.user.address && data.user.address.street;
console.log(street); // undefined`
```

### 提案

这样的层层判断非常麻烦，因此现在有一个[提案](https://github.com/tc39/proposal-optional-chaining)，引入了“链判断运算符”（optional chaining operator）`?.`，简化上面的写法。

```js
console.log(data?.user?.address?.street);
```

上面代码有三个`?.`运算符，直接在链式调用的时候判断，左侧的对象是否为`null`或`undefined`。如果是的，就不再往下运算，而是返回`undefined`。

链判断运算符号有三种用法。

- `obj?.prop` // 读取对象属性
- `obj?.[expr]` // 同上
- `func?.(...args)` // 函数或对象方法的调用

#### 第一种

```js
const data1 = {
  user: {}
};

const data2 = null

console.log(data1?.user?.address?.street);  // undefined
console.log(data2?.user?.address?.street);  // undefined
```

可能引起报错的用法

```js
console.log(data1.user?.address.street); 
```

#### 第二种

```js
// 访问数组
console.log(data?.user?.address?.neighbors?.[27])
console.log(data1?.user?.address?.neighbors?.[27])
```

#### 第三种

有时我们不知道某个函数是否在对象中实现，如某些旧版浏览器可能没有某些功能，我们可以使用可选运算符接来检测函数是否已实现。

```js
// 访问函数
console.log(data?.user?.getNeighbors?.())
```

如果调用链不完整，函数将不会执行。有了可选运运算符，我们的代码中可以减少if语句、lodash等库以及&&进行链式调用的使用。

```js
console.log(data1?.user?.getNeighbors?.())
```

### 注意点

使用这个运算符，有几个注意点。

（1）短路机制

```javascript
a?.[++x]
// 等同于
a == null ? undefined : a[++x]
```

上面代码中，如果`a`是`undefined`或`null`，那么`x`不会进行递增运算。也就是说，链判断运算符一旦为真，右侧的表达式就不再求值。

（2）delete 运算符

```javascript
delete a?.b
// 等同于
a == null ? undefined : delete a.b
```

上面代码中，如果`a`是`undefined`或`null`，会直接返回`undefined`，而不会进行`delete`运算。

（3）报错场合

以下写法是禁止，会报错。

```javascript
// 构造函数判断
new a?.()

// 运算符右侧是模板字符串
a?.`{b}`

// 链判断运算符前后有构造函数或模板字符串
new a?.b()
a?.b`{c}`

// 链运算符用于赋值运算符左侧
a?.b = c
```

（4）右侧不得为十进制数值

为了保证兼容以前的代码，允许`foo?.3:0`被解析成`foo ? .3 : 0`，因此规定如果`?.`后面紧跟一个十进制数字，那么`?.`不再被看成是一个完整的运算符，而会按照三元运算符进行处理，也就是说，那个小数点会归属于后面的十进制数字，形成一个小数。

## 空值合并

在JavaScript中经常会有这样的需求：

1. 如果变量是 null 或 undefined，就给变量设置默认值
2. 但是变量是0，false和 '' 时，不设置默认值

我们可以这样写

```js
value != null ? value : 'default value'
```

> ```js
> value != null
> ```
>
> 等价于
>
> ```js
> value !== null && value !== undefined
> ```
>
> PS: [JavaScript-Equality-Table](https://dorey.github.io/JavaScript-Equality-Table/)

然后有的时候我们会这么写

```js
value = value || 'default value'
```

但是这么写value为0、false和''时都被视为false。所以应对上面的需求只能用第一种写法

这就是新提案的用武之地，现在我们可以这样做：

```js
value ?? 'default value'
```

示例

```js
let v1 = null
v1 = v1 ?? 'default value'

console.log(v1, '-- null') 
// default value -- null

console.log(undefined ?? 'default value', '-- undefined')
// default value -- undefined
            
console.log('' ?? 'default value', "-- ''")
//  -- ''

console.log(0 ?? 'default value', '-- 0')
// 0 '-- 0'            

console.log(false ?? 'default value', '-- false')
// false '-- false'
```

## 逻辑分配

在逻辑表达式中使用赋值运算并不被推荐，甚至大部分 Lint Rule 都会对此进行警告：

```js
foo || (foo = bar)
```

而应当使用 if 语句来实现相应功能：

```js
if (!foo) {foo = bar}
```

新提案我们可以这样写

```js
let a1 = ''
let b1 = 'foo'
console.log(a1 ||= b1)
```

## 管道运算符

在函数式编程中，我们有一个概念叫compose，它多个函数调用合并在一起，调用时从右到左执行每个函数，函数接收前一个函数的输出作为其输入，以下是我们在纯JavaScript中讨论的一个示例：

```js
function doubleSay (str) {
  return str + ", " + str;
}

function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}

function exclaim (str) {
  return str + '!';
}

let result = exclaim(capitalize(doubleSay("hello")));
console.log(result) //=> "Hello, hello!"
```

使用新的管道运算符，可以不使用第三方库并按如下所示编写上述内容：

```js
let result1 = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim;
console.log(result1)
```

JavaScript 的管道是一个运算符，写作`|>`。它的左边是一个表达式，右边是一个函数。管道运算符把左边表达式的值，传入右边的函数进行求值。

```javascript
x |> f
// 等同于
f(x)
```

管道运算符只能传递一个值，这意味着它右边的函数必须是一个单参数函数。如果是多参数函数，就必须进行柯里化，改成单参数的版本。

```javascript
function double (x) { return x + x; }
function add (x, y) { return x + y; }

let person = { score: 25 };
person.score
  |> double
  |> (_ => add(7, _))
// 57
```

上面代码中，`add`函数需要两个参数。但是，管道运算符只能传入一个值，因此需要事先提供另一个参数，并将其改成单参数的箭头函数`_ => add(7, _)`。这个函数里面的下划线并没有特别的含义，可以用其他符号代替，使用下划线只是因为，它能够形象地表示这里是占位符。

```js
let n = 1
  |> (_ => Math.max(0, _))
	|> console.log  // 1

let m = -5
  |> (_ => Math.max(0, _))
	|> console.log  // 0
```

### babel

[@babel/plugin-proposal-pipeline-operator](https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator)

**.babelrc**

```json
{
  "plugins": [["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }]]
}

Copy
```

The Pipeline Proposal is one of three competing implementations. Which implementation the plugin should use is configured with the `"proposal"` option. This option is required and should be one of:

- `"minimal"` – [Minimal Pipeline](https://github.com/tc39/proposal-pipeline-operator/)（*Stage 1 Draft / March 12, 2019*）
- `"smart"` - [Smart Pipeline](https://github.com/js-choi/proposal-smart-pipelines) （*Stage 0 Draft / March 25, 2018*）
- `"fsharp"` - [F#-Style Pipeline](https://github.com/valtech-nyc/proposal-fsharp-pipelines) (Coming Soon!)

Only "minimal" and "smart" are currently supported. "fsharp" is still in progress.

When one of the implementations is accepted, it will become the default and the `"proposal"` option will no longer be required.

