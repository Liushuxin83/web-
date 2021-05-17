<template>
  <!-- <h2>name: {{ state.name }}</h2>
  <h2>name: {{ state.age }}</h2> -->
  <h2>name: {{ name }}</h2>
  <h2>name: {{ age }}</h2>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup () {
    const state = reactive({
      name: '刘舒新',
      age: 18
    })
    // 定时器 更新数据，如果数据变化了，界面也会随之变化肯定是响应式数据
    setInterval(() => {
      state.name += '==='
    }, 1000)
    return {
      ...toRefs(state)
    }
  }
})
</script>
