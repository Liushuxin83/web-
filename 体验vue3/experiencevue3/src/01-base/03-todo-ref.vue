<template>
  <div>
    <input type="text" ref="myText" />
    <button @click="onAdd">Add</button>
    <ul>
      <li v-for="(item, index) in state.dataList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
  name: 'TodoRef',
  setup () {
    const state = reactive({
      dataList: []
    })
    const myText = ref('')
    const onAdd = () => {
      // console.log(myText.value.value)
      state.dataList.push(myText.value.value)
      myText.value.value = ''
    }
    return {
      myText,
      onAdd,
      state
    }
  }
}
</script>
<style lang="less" scoped></style>
