<template>
  <div>
    子组件
  </div>
  <button @click="changeParentProps">更改父组件传过来的props</button>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    // console.log(props)
    const changeParentProps = () => {
      emit('update:modelValue', '123')
    }
    return {
      changeParentProps
    }
  }
})
</script>
