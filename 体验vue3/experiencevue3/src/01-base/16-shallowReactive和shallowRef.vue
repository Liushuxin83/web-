<template>
  <h2>m1: {{ m1 }}</h2>
  <h2>m2: {{ m2 }}</h2>
  <h2>m3: {{ m3 }}</h2>
  <h2>m4: {{ m4 }}</h2>
  <hr />
  <button @click="updateData">更新数据</button>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  shallowReactive,
  shallowRef,
  ref
} from 'vue'

export default defineComponent({
  setup () {
    const m1 = reactive({
      name: '刘舒新',
      age: 18,
      car: {
        name: '奔驰',
        color: 'red'
      }
    })
    const m2 = shallowReactive({
      name: '刘舒新',
      age: 18,
      car: { name: '奔驰', color: 'red' }
    })
    const m3 = ref({
      name: '刘舒新',
      age: 18,
      car: { name: '奔驰', color: 'red' }
    })
    const m4 = shallowRef({
      name: '刘舒新',
      age: 18,
      car: { name: '奔驰', color: 'red' }
    })
    const updateData = () => {
      // 更改m1 数据 --- reactive方式(深度响应式)
      // m1.name += '==='
      // m1.car.name += '==='
      // 更改m2 数据 --- shallowReactive方式(浅度响应式)
      // m2.name += '==='
      // m2.car.name += '===' // 这个语句执行 必须要把前边的响应式语句注释掉
      // 更改m3 数据 --- ref方式
      // m3.value.name += '==='
      // m3.value.car.name += '==='
      // 更改m4 数据 --- shallowRef方式   (这样处理就变成普通对象了)
      m4.value.name += '==='
      m4.value.car.name += '==='
      console.log(m3, m4)
    }
    return {
      m1,
      m2,
      m3,
      m4,
      updateData
    }
  }
})
</script>
