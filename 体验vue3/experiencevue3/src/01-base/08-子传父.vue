<template>
  <div>
    <navbar @navbarclick="fatherClick" />
    <sidebar v-show="state.isShow" />
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { reactive } from 'vue'
export default {
  name: '',
  components: {
    Navbar,
    Sidebar
  },
  setup () {
    const state = reactive({
      isShow: false
    })
    const fatherClick = () => {
      state.isShow = !state.isShow
    }
    return {
      state,
      fatherClick
    }
  }
}
</script>
<style lang="less" scoped></style>
