<template>
  <button @click="$router.go(-1)">返回</button>
  <h1>01-toRaw和markRaw的使用</h1>
  <hr>
  <h3>name:{{ state.name }} <button @click="onToRaw">点击使用toRaw</button> <button @click="onMarkRaw">点击使用markRaw</button></h3>
  <h3>nameList：{{state.list}}</h3>
  <h3>age:{{ state.age }}</h3>
</template>

<script setup>
import {markRaw, reactive, toRaw} from "vue";

const state = reactive({
  name: '小明',
  age: 18,
})

const onToRaw = () =>{
  const toRaw1 = toRaw(state)
  setTimeout(()=>{
    // toRaw操作的age 不会产生更新
    toRaw1.age = 100;
  })
  setTimeout(()=>{
    // 实际他修改了age为100只是没有更新
    // 在这时一起更新
    state.age = state.age + 1;
  },1000)
}

const onMarkRaw = () =>{
  // 将数据变为非响应式数据 传入 修改markRaw的数据将不会产生更新
  state.list = markRaw({age:100})
  setTimeout(()=>{
    state.list.age = 500
  })
  console.log(state)
}

</script>

<style scoped>

</style>
