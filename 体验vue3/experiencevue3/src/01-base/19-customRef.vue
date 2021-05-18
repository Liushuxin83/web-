<template>
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>
<script lang="ts">
import { customRef, defineComponent } from 'vue'
// customRef用于自定义一个ref，可以显示的控制依赖追踪和触发相应，接收一个工厂函数，两个参数分别用于追踪的track与用于触发响应的trigger，并返回一个带有get和set属性的duix
// 自定义hooks防抖函数
function useDebounceRef (value, delay) {
  let timer
  return customRef((trick, trigger) => {
    return {
      get () {
        // 告诉vue追踪数据
        trick()
        return value
      },
      set (newValue) {
        // 清理定时器
        clearTimeout(timer)
        // 开启定时器
        timer = setTimeout(() => {
          value = newValue
          // 告诉vue 更新界面
          trigger()
        }, delay)
      }
    }
  })
}
export default defineComponent({
  setup () {
    // const keyword = ref('abc')
    const keyword = useDebounceRef('abc', 1000)
    return {
      keyword
    }
  }
})
</script>
