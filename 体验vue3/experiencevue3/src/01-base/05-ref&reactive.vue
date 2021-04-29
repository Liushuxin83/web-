<template>
  <button @click="onAdd">+++</button>
  <div>{{ state.count }}</div>
  <button @click="onJian">---</button>
  <child />
</template>
<script>
import { countAddAndJian } from './hooks/count'
import { reactive } from 'vue'
import Child from '../components/Child.vue'
export default {
  name: '',
  components: {
    Child
  },
  setup () {
    // 这就是组合式API  函数可以抽离出去
    const { count, onAdd, onJian } = countAddAndJian()
    const state = reactive({
      // ref嵌套在reactive中
      count
    })
    return {
      state,
      onAdd,
      onJian
    }
    // const count = ref(0)
    // const onAdd = () => {
    //   count.value++
    // }
    // const onJian = () => {
    //   count.value--
    // }
    // return {
    //   count,
    //   onAdd,
    //   onJian
    // }
  }
}
</script>
<style lang="less" scoped></style>
