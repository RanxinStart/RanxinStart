//需求  传入任意类型 返回任意类型的 数组
// 参数A  任意类型的数据   参数B 数量   返回对应的数据类型的数组

/*function createList<T>(value: T, num: number): T[] {
    const arr: Array<T> = new Array(num);
    return arr.fill(value);
}*/


let createList = <T>(value: T, num: number): T[] => {
    const arr: Array<T> = new Array(num);
    return arr.fill(value);
}

//多个泛型...
/*let createList = <V, N>(value: V, num: N): [V, N] => {
    return [value, num];
}*/

const arr1 = createList<string>('str', 20);
console.log(arr1[0].split(''));

const arr2 = createList<number>(100, 30);
console.log(arr2[0].toFixed(2))

const arr3 = createList(120, 30);  //自动类型
console.log(arr3[0].toFixed(2))


console.log(arr1)

