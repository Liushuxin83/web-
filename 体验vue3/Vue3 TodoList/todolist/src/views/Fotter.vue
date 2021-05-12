<template>
  <div>
    <el-checkbox v-model="isAllCheckedComputed"></el-checkbox>
    <span>已完成{{ countComputed }}</span> /
    <span>全部{{ todosList.length }}</span>
    <el-button type="danger" class="clear" @click="onClearChecked"
      >清除已完成</el-button
    >
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Todo } from '../type/todoInterface'
export default defineComponent({
  name: 'Fotter',
  props: {
    todosList: {
      type: Array as () => Todo[],
      require: true
    }
  },
  setup (props, { emit }) {
    // 计算属性 返回已经勾选的个数
    const countComputed = computed(() => {
      return (props as any).todosList.reduce((pre, val) => {
        // 这里必须得return  不能忘记 不然就报错了
        return pre + (val.isChecked ? 1 : 0)
      }, 0)
    })
    const isAllCheckedComputed = computed({
      get () {
        return (props as any).todosList.every(val => {
          return val.isChecked === true
        })
      },
      set (val) {
        emit('onCheckAll', val)
      }
    })
    const onClearChecked = () => {
      emit('onClearChecked')
    }
    return {
      countComputed,
      isAllCheckedComputed,
      onClearChecked
    }
  }
})
</script>
<style lang="less" scoped>
/deep/ .clear {
  margin-left: 500px;
}
</style>
