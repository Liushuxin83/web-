<template>
  <h1>孩子</h1>
  <h2>age:{{ age }}</h2>
  <div>{{ lengthComputed }}</div>
</template>
<script lang="ts">
import { computed, defineComponent, toRef } from 'vue'
// function useGetLength (age: Ref<any>) {
//   return computed(() => {
//     return age.value.toString().length
//   })
// }
export default defineComponent({
  props: {
    age: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const length = toRef(props, 'age')
    const lengthComputed = computed(() => {
      return length.value.toString().length
    })
    return {
      lengthComputed
    }
  }
})
</script>
