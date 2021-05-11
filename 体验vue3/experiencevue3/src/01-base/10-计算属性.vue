<template>
  <div>计算属性---{{ myName }}</div>
  <div>{{ computedMyName }}</div>
  <button @click="change">changeName</button>
</template>
<script>
import { ref, computed } from 'vue'
export default {
  name: '',
  setup () {
    const myName = ref('lsx')
    // computed 需要传入回调函数  只要myName改变 计算属性就会重新计算一遍
    const computedMyName = computed(() => {
      return myName.value.slice(0, 1).toUpperCase() + myName.value.slice(1)
    })
    const change = () => {
      myName.value = 'liushuxin'
    }
    return {
      myName,
      computedMyName,
      change
    }
  }
}
</script>
<style lang="less" scoped></style>
