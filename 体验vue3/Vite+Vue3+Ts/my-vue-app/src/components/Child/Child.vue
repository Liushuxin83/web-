<template>
  <h1 :style="{ backgroundColor: titleInfo.color }">
    123 {{ titleInfo.value }}
  </h1>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
type TitleInfo = {
  value: string
  color: string
}
export default defineComponent({
  // 对props做约束
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true
    }
  },
  setup () {}
})
</script>
