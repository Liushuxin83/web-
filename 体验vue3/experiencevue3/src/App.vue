<template>
  <div id="nav" v-show="$store.state.isShow">
    hello Vue3
    <div>
      <!-- tag不支持了 -->
      <router-link to="/film" active-class="active">film</router-link>
      <router-link to="/center" active-class="active">center</router-link>
      <router-link to="/cinema" active-class="active">cinema</router-link>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {}
</script>
<style lang="scss">
.active {
  color: red;
}
</style>
