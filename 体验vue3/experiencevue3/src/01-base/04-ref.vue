<template>
  <div>ref---{{ myName }}---{{ myAge }}</div>
  <button @click="onBtnChange">change</button>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'Ref',
  // ref和reactive都是创建一个包装对象，区别是ref含有一个响应式的属性value，ref对value做了一层包装,可以接收普通数据类型
  setup () {
    const myName = ref('lsx')
    const myAge = ref(100)
    const onBtnChange = () => {
      // console.log(myName)
      myName.value = 'xiaoming'
      myAge.value = 18
    }
    return {
      myName,
      myAge,
      onBtnChange
    }
  }
}
</script>
<style lang="less" scoped></style>
