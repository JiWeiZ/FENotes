function replaceSpace(str)
{
    // write code here
    return str.replace(/ /g, '%20')
}

var str = 'We Are Happy'
console.log(replaceSpace(str))
