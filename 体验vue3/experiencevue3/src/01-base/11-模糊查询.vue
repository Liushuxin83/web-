<template>
  <div>
    <input type="text" v-model="myText" />
    <ul>
      <li v-for="(item, index) in computedDataList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import { ref, computed } from 'vue'
export default {
  name: '',
  setup () {
    const myText = ref('')
    const dataList = ref(['aaa', 'bbb', 'ccc', 'abb', 'aac', 'bbc'])
    const computedDataList = computed(() => {
      return dataList.value.filter(item => item.includes(myText.value))
    })
    return {
      myText,
      computedDataList
    }
  }
}
</script>
<style lang="less" scoped></style>
