<template>
  <h2>父组件</h2>
  <Suspense>
    <template #default >
      <!-- 放异步组件 -->
      <AsyncCom />
    </template>
    <template v-slot:fallback>
      <!-- 放准备内容 -->
      <h2>loading.....</h2>
    </template>
  </Suspense>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
// suspense组件 允许程序在等待异步组件时渲染一些后备内容，可以让我们创建一个平滑的用户体验
// vue3中引入动态组件
const AsyncCom = defineAsyncComponent(() => import('../01-base/AsyncCom'))
export default defineComponent({
  components: {
    AsyncCom
  },
  setup () {}
})
</script>
