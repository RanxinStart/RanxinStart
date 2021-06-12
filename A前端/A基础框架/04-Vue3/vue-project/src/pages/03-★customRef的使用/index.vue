<template>
  <button @click="$router.go(-1)">返回</button>
  <br />
  <input v-model="myRef" type="text" />
  <button>更新数据</button>
  <h2>{{ myRef }}</h2>
</template>

<script lang='ts' setup>
import type { Ref } from 'vue'

// 定义一个自定义 ref的hook

import { customRef } from 'vue'
// 1.执行coustomRef传入一个方法 可以得到一个自定义的Ref
let data = ''
const myRef = customRef(
    /** 2.方法可以接受两个值
     * @name track
     * @description 跟踪数据 如果没有跟踪数据 get将无法获取到数据
     * @name trigger
     * @description 触发渲染数据 如果没有触发渲染 将不会更新视图
     */
	(track, trigger)=>{
    // 3.返回一个包含get和set方法的对象
    return {
      get(){
        // 4.get方法中 使用 track()跟踪数据后返回
        track()
        return data
      },
      set(value:any){
        data = value
        // 5.set方法中 使用 trigger()进行修改数据后的更新
        trigger()
      }
    }
	}
)

</script>
