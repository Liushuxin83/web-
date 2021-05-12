<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-input placeholder="请输入内容" v-model="input" clearable>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="addTodo">添加任务</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: ['todosList'],
  setup (props, { emit }) {
    const input = ref('')
    let id = props.todosList.length + 1
    const addTodo = () => {
      if (!input.value.trim()) return
      const todoObj = {
        id: id,
        title: input.value,
        isChecked: false
      }
      emit('addTodo', todoObj)
      input.value = ''
      id++
    }
    return {
      input,
      addTodo
    }
  }
})
</script>

<style lang="less" scoped></style>
