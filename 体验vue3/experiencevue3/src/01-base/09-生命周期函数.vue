<template>
  <div>生命周期</div>
  {{ myName }}
  <button @click="change">change</button>
</template>
<script>
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue'
export default {
  name: '',
  setup () {
    const myName = ref('lsx')
    const change = () => {
      myName.value = 'lll'
    }
    // console.log('代替 beforeCreate和created')
    // 注册回调
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    // new Swiper初始化
    onMounted(() => {
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    return {
      myName,
      change
    }
  }
}
</script>
<style lang="less" scoped></style>
