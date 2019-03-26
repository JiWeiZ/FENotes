// 1-1  匹配16进制颜色值
// #ffbbad
// #Fc01DF
// #FFF
// #ffE
var reg1 = /#[0-9a-fA-F]{3}|[0-9a-fA-F]{6}/g

// 1-2  匹配时间
// 以24小时制为例。
// 要求匹配：
// 23:59
// 02:07
// 注意：使用regex.test时不要加g
var reg2 = /([01]\d|2[0-3]):([0-5]\d)/

// 上面的还要匹配7:9，也就是0可以取消
var reg2_2 = /(0?\d|1\d|2[0-3]):(0?\d|[1-5]\d)/

// 1-3 匹配日期
// 2017-06-10
var reg3 = /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/

// 1-4  匹配盘符

// 1-5 提取HTML中的id
// 首先想到/id=".*"/，但这是贪婪匹配，遇到container后的引号不会停下
// 其结果是`id="container" class="main"`
// 故需使用?实现惰性匹配，即 /id=".*?"/
// 然后使用捕获组，得到/id="(?<id>.*?)"/，返回捕获组groups.id，即为id内容
function getID (str) {
  return str.match(/id="(?<id>.*?)"/).groups.id
}
// console.log(getID('<div id="container" class="main"></div>'))

// 2-1 数字的千位分隔符表示法
// 只最后一个逗号：/(?=\d{3}$)/
// 所有的逗号：/(?=(\d{3})+$)/g，但如果是111222会变成 ",111,222"
// 去掉第一个逗号：/(?!^)(?=(\d{3})+$)/g
function thousandDigit (num) {
  var numStr = num.toString()
  return numStr.replace(/(?!^)(?=(\d{3})+$)/g, ',')
}
// console.log(thousandDigit (111222333444))

// 2-1-1 把"12345678 123456789"替换成"12,345,678 123,456,789"。
// /(?!^)(?=(\d{3})+$)/g    ---- ^, $替换成\b ---->
// /(?!\b)(?=(\d{3})+\b)/g   ---- (?!\b) 就是\B ---->
// /\B(?=(\d{3})+\b)/g
function thousandDigit2 (numStr) {
  return numStr.replace(/\B(?=(\d{3})+\b)/g, ',')
}
console.log(thousandDigit2 ("123456789 123456789"))
