<template>
  <h1>{{ title }}</h1>
  <h2>{{ str }}</h2>
  <button @click="eClick">点击~~~</button>
</template>

<script lang="ts" setup>
import {defineEmit, defineProps} from 'vue';

const props = defineProps({
  title: {
    type: String,
  },
  str: {
    type: String
  },
  click: {
    type: Function
  }
})

const emit = defineEmit();

const eClick = () => {
  emit('xxx', '我使用Emit触发了xxx')
}


console.log(emit)

console.log(props)

/*props: ['title','str1'],
setup(props, {attrs, emit, slots}) {
  console.log(props, attrs, emit)
  const count = ref(0);

  let countAdd = (e: MouseEvent): number => count.value++

  return {
    count,
    countAdd
  }
}*/
</script>
