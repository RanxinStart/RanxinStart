<template>
  <button @click="$router.go(-1)">返回</button>
  <h1>age:{{state.age}}</h1>
  <h1>money:{{state.money}}</h1>
  <button @click="update">更新数据</button>
</template>

<script setup>
import {reactive, toRef, toRefs} from "vue";

  const state = reactive({age:0,money:0})
  const toRefsState = toRefs(state)
  const {money} = toRefs(state)
  // toRef和toRefs的不同点
  const age = toRef(state,'age')
  const update = () =>{
    // 此时这三个操作都能修改原数据
    toRefsState.age.value += 1
    age.value += 1
    money.value += 1
  }
</script>

<style scoped>

</style>
