<template>
  <div>
    setup
    {{ myName }}---{{ myAge }}
    <button @click="change">change</button>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  // toRefs默认直接展开state，那么此时reactive数据变成普通数据，通过toRefs，可以把reactive里面的每一个属性，转化为ref对象，这样展开后，就会变成多个ref对象，依然具有响应特性
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
      ...toRefs(state),
      change
    }
  }
}
</script>
<style lang="scss" scoped></style>
