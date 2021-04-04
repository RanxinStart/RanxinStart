<template>
  <h1>点击变多</h1>
  <h2>{{ count }}</h2>
  <button @click="(e)=>{countAdd(e) && childClick('_!')}">点击+++</button>
  <hr>
  <Child :str='str1' title="Child组件" @xxx="childClick" :click="childClick"/>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Child from "@/components/Child.vue";

export default defineComponent({
  name: 'App',
  components: {
    Child
  },
  setup() {

    const count = ref(0);
    const str1 = ref('str---')

    let countAdd = (e: MouseEvent): number => count.value++
    let childClick = (str: string): string => str1.value += str;


    return {
      str1,
      count,
      countAdd,
      childClick
    }
  }
});
</script>
