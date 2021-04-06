#Vue3 相关代码学习 (含TS)
> 简单的学习


# Code

---
### toRefs
> 将Reactive中的对象 内部全部变为ref响应式对象
```javascript
const state = reactive({a:1,b:2})
// 得到一个包含多个 ref的对象
const state1 = toRefs(state);
// 得到多个ref变量
const { a,b } = toRefs(state);
```
> 此时 修改a和b或state1.a和state1.b的值会修改原数据
---
### toRef
> 和上面基本一致，不同的是toRef是指定一个对象的某个值进行toRef
```javascript
const state = reactive({a:1,b:2})
// 得到单个ref值 它们的关系和refs一样是互相绑定的
const a = toRef(state,'a');
const b = toRef(state,'b');
```
> 此时 修改a和b的值会修改原数据
---
### shallowRef 和 shallowReactive
> 浅响应式对应ref和reactive方法
> 
> 区别在于shallowRef/shallowReactive只能操作第一次数据
> 
> ref时两层的数据是proxy 而shallow时第二层数据是 object(普通对象)
---
### readonly 和 shallowReadonly
> 将数据处理为只读 shallowReadonly仅第一层只读
```javascript
const state = reactive({a:1,b:2})
// state1的值将无法修改 修改会报错..
const state1 = readonly(state);
```
### toRaw 和 markRaw
> toRaw返回的对象 拷贝了一份响应式数据 使用toRaw数据修改后 不会触发更新操作
> 
> markRaw返回的对象 交给一个响应式数据 修改响应式数据中markRaw对象的值  不会触发更新操作
