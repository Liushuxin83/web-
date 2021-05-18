<template>
  <h2>state: {{ state }}</h2>
  <h2>age: {{ age }}</h2>
  <h2>money: {{ money }}</h2>
  <button @click="updateData">更新数据</button>
  <hr />
  <Child :age="age" />
</template>
<script lang="ts">
import { defineComponent, reactive, toRef, ref } from 'vue'
import Child from '../01-base/ToRefChild'
export default defineComponent({
  components: {
    Child
  },
  setup () {
    const state = reactive({
      age: 5,
      money: 100
    })
    // 把响应式数据state对象中的某个属性age变成了ref对象了
    const age = toRef(state, 'age')
    // 把响应式对象的某个属性使用ref进行包装变成了一个ref对象
    const money = ref(state.money)
    // console.log(age, money)

    const updateData = () => {
      // 更新数据
      // 这两个数据现在是互通的
      // state.age += 2
      age.value += 2
      // 这两个数据现在不是互通的
      // state.money += 2
      // money.value += 2
    }
    return {
      state,
      age,
      money,
      updateData
    }
  }
})
</script>
