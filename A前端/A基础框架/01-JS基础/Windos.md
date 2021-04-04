# Jacascript Windos

## 目录
[preventDefault()](#阻止事件默认行为)
[setInterval()](#循环定时器)
[getComputedStyle()](#获取元素样式)

-

## 使用说明
[阻止事件默认行为](#阻止事件默认行为)
[循环的定时器](#循环定时器)
[停止定时器](#停止定时器)
[获取元素样式](#获取元素样式)
-

###获取元素样式 
> 获得某元素样式
```javascript
//返回一个对象,对象中包含所有样式
var obj = getComputedStyle(element,null);
//取得样式值
console.log(obj.styleName);

//ie9以下使用
var style = element.currentStyle.style;
console.log(style);
```

### 阻止事件默认行为
> 当事件触发事取消默认行为,例如表单提交
```javascript
//阻止事件默认行为
onclick = function ( event ) {
	event.preventDefault();
}
```

### 循环定时器
> 一个定时器函数 会无限循环执行
```javascript
//设置一个循环定时器
setInterval(a,b);
//返回一个定时器ID 主要用于停止
```
> **a** 表示要执行的回调函数
> **b** 表示循环时间的间隔ms

### 停止定时器
> 通过定时器ID停止定时器 停止内存泄漏
```javascript
clearInterval(a); //停止定时器
```
> **a** 表示定时器ID(循环定时器的返回值)