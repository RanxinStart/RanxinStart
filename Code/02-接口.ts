//先定义接口 可以指定 传入一个参数的集合  对象 and 数组 需要

interface foodObject {
    name: string,
    size?: number,
}

let createFood = (food: foodObject) => {
    //指定了接口 会自动提取参数  有语法提示
    return food.name + food.size;
}

/*

createFood({name: "", size: 0}); //符合类型 不会报错
createFood({name: 0, size: ''}); //不符合类型 会报错
createFood({name: ''}); //size 设置了可以不传 不会报错
createFood({size: 0}); //但是name 没有设置 会报错

* */

