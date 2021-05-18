<template>
  <h2>state: {{ state }}</h2>
  <button @click="testtoRaw">测试toRaw</button>
  <button @click="testmarkRaw">测试markRaw</button>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw, markRaw } from 'vue'

export default defineComponent({
  setup () {
    const state = reactive({
      name: '小米',
      age: 100
    })
    const testtoRaw = () => {
      // 把代理对象变成了普通对象，数据变化界面不变化
      const user = toRaw(state)
      user.name += '==='
      console.log('执行了')
    }
    const testmarkRaw = () => {
      // state.likes = ['吃', '喝']
      // state.likes[0] += '==='

      // markRaw标记的对象，从此以后都不能再成为代理对象了
      const likes = ['吃', '喝']
      state.likes = markRaw(likes)
      setTimeout(() => {
        state.likes[0] += '==='
      }, 1000)
    }
    return {
      state,
      testtoRaw,
      testmarkRaw
    }
  }
})
</script>
