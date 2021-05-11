<template>
  <div>
    <input type="text" v-model="myText" />
    <ul>
      <li v-for="(item, index) in dataList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import { ref, watch, reactive } from 'vue'
export default {
  name: '',
  setup () {
    const myText = ref('')
    const dataList = ref(['aaa', 'bbb', 'ccc', 'abb', 'aac', 'bbc'])
    const catchList = dataList.value
    // Vue3计算属性
    // const computedDataList = computed(() => {
    //   return dataList.value.filter(item => item.includes(myText.value))
    // })
    // Vue3的watch  ref方式  直接监听就好，不用加value
    watch(myText, () => {
      // console.log(myText.value)
      state.name = myText.value
      dataList.value = catchList.filter(item => {
        return item.includes(myText.value)
      })
    })
    const state = reactive({
      name: 'lsx'
    })
    // reactive方式的 watch写法！！！写成箭头函数
    watch(
      () => state.name,
      () => {
        console.log(11, state.name)
      }
    )
    return {
      myText,
      dataList,
      state
    }
  }
}
</script>
<style lang="less" scoped></style>
