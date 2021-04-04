//表示需要一个 形参 为 字符串类型 返回一个字符串
let addString = (str:string):string =>{
    return str;
}

let msgInString = 'abc';
let msgInArray = [0,1,2,3]

// addString(msgInArray);  //报错 因为需要一个 字符串的类型
addString(msgInString);

/*
interface array {
    name:['']
}

//表示一个 形参 为字符串类型 返回一个数组
let addStringToArray = (str:string):array =>{

}*/
