<template>
  <div>
    <input type="text" v-model="state.myText" />
    {{ state.myText }}
    <button @click="onBtnClick">Add</button>
    <ul>
      <li v-for="(item, index) in state.dataList" :key="index">
        {{ item }}
        <button @click="onDel(index)">Del</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  name: 'Todo',
  setup () {
    const state = reactive({
      myText: '',
      dataList: []
    })
    const onBtnClick = () => {
      // console.log(state.myText)
      state.dataList.push(state.myText)
      state.myText = ''
    }
    const onDel = index => {
      state.dataList.splice(index, 1)
    }
    return {
      state,
      onBtnClick,
      onDel
    }
  }
}
</script>
<style lang="less" scoped></style>
