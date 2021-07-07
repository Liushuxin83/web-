<template>
  <div>父组件---{{ data }}</div>
  <hr />
  <!-- 一般情况下子传父 -->
  <!-- <VmodelCompChild :data="data" @changeParentProps="changeProps" /> -->
  <VmodelCompChild v-model="data" />
  <!-- 如果不想叫modelValue这个名字  可以写成   v-model:abc="data"   !!!!-->
  <!-- 等价于 -->
  <!-- <VmodelCompChild :modelValue="data" @update:modelValue="data = $event" /> -->
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import VmodelCompChild from './VmodelCompChild.vue'

export default defineComponent({
  setup () {
    const data = ref('刘舒新')
    return {
      data
    }
  },
  components: {
    VmodelCompChild
  }
})
</script>
