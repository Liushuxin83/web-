<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div v-for="item in items" :key="item.id">{{ item.name }}</div>
  <Child :title-info="{ value: '刘舒新的标题', color: 'red' }" />
  <CompositionChild :title-info="{ value: '新标题', color: 'green' }" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Child from './components/Child/Child.vue'
import CompositionChild from './components/CompositionChild/CompositionChild.vue'
interface Todo {
  id: number
  name: string
  complete: boolean
}
export default defineComponent({
  name: 'App',
  data () {
    return {
      items: [] as Todo[]
    }
  },
  mounted () {
    this.items.push({ id: 1, name: 'lsx', complete: false })
    console.log(this.items)
  },
  components: {
    Child,
    CompositionChild
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
