<template>
  <button @click="$router.go(-1)">返回</button>
  <br>
  <input v-model="state" type="text"><button @click="update">更新数据</button>
  <h2>{{state}}</h2>
</template>

<script setup>
  import {customRef,watch,ref} from "vue";

  // 定义一个自定义 ref的hook
  const useCustomRefHook = (value, time = 200) =>{
    let timeOut;
    return customRef((track, trigger)=>{
      //track得到参数  trigger更新视图
        return {
          get(){
            track()
            return value
          },
          set(newValue){
            // 清除定时器
            clearTimeout(timeOut)
            // 定时更新数据
            timeOut = setTimeout(()=>{
              value = newValue
              trigger()
            },time)
          }
        }
    })
  }

  const state = useCustomRefHook('',0)
  // const state = ref('')

  watch(state,()=>{
    // 这是一个自定义对象...
    console.log(state)
  })


  const update = () =>{
    let a = state.value
    console.log(a)
    setTimeout(()=>{
      state.value = '?????'
    })
    setTimeout(()=>{
      state.value = '1'
    })
    setTimeout(()=>{
      state.value = '2'
    })
    setTimeout(()=>{
      state.value = '3'
    })
    setTimeout(()=>{
      state.value = a
    })
  }

</script>

<style scoped>

</style>
