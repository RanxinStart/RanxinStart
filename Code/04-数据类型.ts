let isDone: boolean = false
isDone = true
// isDone = 2 // error


let a1: number = 10 // 十进制
let a2: number = 0b1010 // 二进制
let a3: number = 0o12 // 八进制
let a4: number = 0xa // 十六进制


let nameStr: string = 'tom'
nameStr = 'jack'
// nameStr = 12 // error
let age: number = 12
const info = `My name is ${nameStr}, I am ${age} years old!`


let u: undefined = undefined
let n: null = null

let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

let t1: [string, number]
t1 = ['hello', 10] // OK
// t1 = [10, 'hello'] // Error

console.log(t1[0].substring(1)) // OK
// console.log(t1[1].substring(1)) // Error, 'number' 不存在 'substring' 方法


enum Color {
    Red,
    Green,
    Blue
}

// 枚举数值默认从0开始依次递增
// 根据特定的名称得到对应的枚举数值
let myColor: Color = Color.Green // 0
console.log(myColor, Color.Red, Color.Blue)


enum Colors {
    Red = 1,
    Green,
    Blue
}

let c1: Colors = Colors.Green


enum ColorAll {
    Red = 1,
    Green = 2,
    Blue = 4
}

let c: ColorAll = ColorAll.Green
let colorName: string = ColorAll[2]
console.log(colorName) // 'Green'


let notSure: any = 4
notSure = 'maybe a string'
notSure = false // 也可以是个 boolean

let list: any[] = [1, true, 'free']
list[1] = 100


/* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
function fn(): void {
    console.log('fn()')
    // return undefined
    // return null
    // return 1 // error
}

//声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null
let unusable: void = undefined


function fn2(obj: object): object {
    console.log('fn2()', obj)
    return {}
    // return undefined
    // return null
}

console.log(fn2(new String('abc')))
// console.log(fn2('abc') // error
console.log(fn2(String))


function toString2(x: number | string): string {
    return x.toString()
}


//需求 2: 定义一个一个函数得到一个数字或字符串值的长度
function getLength(x: number | string) {
    // return x.length // error

    if (typeof x !== "number" && x?.length) {
        // error
        return x.length
    } else {
        return x.toString().length
    }
}
