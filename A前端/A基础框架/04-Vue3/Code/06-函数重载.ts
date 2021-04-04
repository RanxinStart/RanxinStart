//需求  传两数字 返回 和 传两字符串 返回 拼接  传一个数字一个字符串报错..


/*
function add(v1: string, v2: string): string
function add(v1: number, v2: number): string

function add(v1: string | number, v2: string | number): string | number {
    if (typeof v1 === 'string' && typeof v2 === 'string')
        return v1 + v2;
    else if (typeof v1 === 'number' && typeof v2 === 'number')
        return v1 + v2;
}
*/

function add(v1: string, v2: string): string
function add(v1: number, v2: number): number

//同上... 重载可以继承属性和返回值
function add(v1, v2) {
    if (typeof v1 === 'string' && typeof v2 === 'string')
        return v1 + v2;
    else if (typeof v1 === 'number' && typeof v2 === 'number')
        return v1 + v2;
}


console.log(add(1, 2));  //3
console.log(add('a', 'b'));  //ab
// console.log(add('1', 2));  //    重载后报错
// console.log(add(1, '2'));  //    重载后报错

