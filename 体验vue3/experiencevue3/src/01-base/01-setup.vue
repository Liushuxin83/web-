<template>
  <div>
    setup
    {{ state.myName }}---{{ state.myAge }}
    <button @click="change">change</button>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  name: 'Setup',
  // 自己会执行   代替beforeCreate和created   定义状态
  setup () {
    // console.log(11, this)
    const state = reactive({
      myName: 'lsx',
      myAge: 100
    })
    const change = () => {
      state.myName = 'xiaoming'
      state.myAge = 18
    }
    return {
      state,
      change
    }
  }
}
</script>
<style lang="scss" scoped></style>
