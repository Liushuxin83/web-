<template>
  <div>
    自定义hooks函数，当用户点击页面后，获取点击的横纵坐标位置，并显示出来
  </div>
  <h2>x: {{ x }}---y: {{ y }}</h2>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useMousePosition from '../01-base/hooks/useMousePosition'
export default defineComponent({
  setup () {
    const { x, y } = useMousePosition()
    return {
      x,
      y
    }
  }
})
</script>
