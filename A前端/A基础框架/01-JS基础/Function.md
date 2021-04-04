# Jacascript Function

## 目录
[bind](#bind)

## 使用说明
[修改方法中的this](#bind)
-

### bind
> 使用bind关键字 返回一个指定好this的新方法 
```javascript
//方法A   this = 自己
let Fun = funciton () {}  
//方法B   this = windos
let WindosFun = Fun.bind(windos);  //第一个形参指定this
```