<template>
  <div>
    navbar---
    <button @click="navbarclick">navbar-Btn</button>
  </div>
</template>
<script>
export default {
  name: '',
  setup (props, { emit }) {
    console.log(emit)
    const navbarclick = () => {
      emit('navbarclick')
    }
    return {
      navbarclick
    }
  }
}
</script>
<style lang="less" scoped></style>
