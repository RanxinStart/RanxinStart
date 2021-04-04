let isDone = false;
isDone = true;
// isDone = 2 // error
let a1 = 10; // 十进制
let a2 = 0b1010; // 二进制
let a3 = 0o12; // 八进制
let a4 = 0xa; // 十六进制
let nameStr = 'tom';
nameStr = 'jack';
// nameStr = 12 // error
let age = 12;
const info = `My name is ${nameStr}, I am ${age} years old!`;
let u = undefined;
let n = null;
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
let t1;
t1 = ['hello', 10]; // OK
// t1 = [10, 'hello'] // Error
console.log(t1[0].substring(1)); // OK
// console.log(t1[1].substring(1)) // Error, 'number' 不存在 'substring' 方法
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// 枚举数值默认从0开始依次递增
// 根据特定的名称得到对应的枚举数值
let myColor = Color.Green; // 0
console.log(myColor, Color.Red, Color.Blue);
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
let c1 = Colors.Green;
var ColorAll;
(function (ColorAll) {
    ColorAll[ColorAll["Red"] = 1] = "Red";
    ColorAll[ColorAll["Green"] = 2] = "Green";
    ColorAll[ColorAll["Blue"] = 4] = "Blue";
})(ColorAll || (ColorAll = {}));
let c = ColorAll.Green;
let colorName = ColorAll[2];
console.log(colorName); // 'Green'
let notSure = 4;
notSure = 'maybe a string';
notSure = false; // 也可以是个 boolean
let list = [1, true, 'free'];
list[1] = 100;
/* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
function fn() {
    console.log('fn()');
    // return undefined
    // return null
    // return 1 // error
}
//声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null
let unusable = undefined;
function fn2(obj) {
    console.log('fn2()', obj);
    return {};
    // return undefined
    // return null
}
console.log(fn2(new String('abc')));
// console.log(fn2('abc') // error
console.log(fn2(String));
function toString2(x) {
    return x.toString();
}
//需求 2: 定义一个一个函数得到一个数字或字符串值的长度
function getLength(x) {
    // return x.length // error
    if (typeof x !== "number" && x?.length) {
        // error
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
