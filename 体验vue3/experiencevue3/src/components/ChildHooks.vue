<template>
  <div>
    子组件
    {{ myTitle }}---{{ myText }}
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'ChildHooks',
  props: {
    myTitle: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    // 如果要操作 props 需要用setup接收props参数
    console.log(props.myTitle)
    const myText = ref(props.myTitle + 111)
    return {
      myText
    }
  }
}
</script>
<style lang="less" scoped></style>
