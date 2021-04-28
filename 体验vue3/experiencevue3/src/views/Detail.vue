<template>
  <div>detail---{{ filmId }}</div>
</template>
<script>
import { onUnmounted, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'Detail',
  setup () {
    // 获取列表页传来的id  用此id进行数据请求
    console.log(useRoute())
    const filmId = useRoute().params.id
    onMounted(() => {
      useStore().commit('hide')
    })
    onUnmounted(() => {
      useStore().commit('show')
    })
    return {
      filmId
    }
  }
}
</script>
<style lang="less" scoped></style>
