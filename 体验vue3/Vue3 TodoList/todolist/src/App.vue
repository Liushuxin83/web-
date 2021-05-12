<template>
  <div class="todo-list-wrap">
    <Header @addTodo="addTodo" :todos-list="todos" />
    <Body
      :todos-list="todos"
      @todoDelete="todoDelete"
      @handelChange="handelChange"
    />
    <Fotter
      :todos-list="todos"
      @onCheckAll="onCheckAll"
      @onClearChecked="onClearChecked"
    />
  </div>
</template>
<script lang="ts">
// 定义一个接口 来约束state的数据类型
import { defineComponent, reactive, toRefs } from 'vue'
import Header from '../src/views/Header.vue'
import Body from '../src/views/Body.vue'
import Fotter from '../src/views/Fotter.vue'
import { Todo } from '../src/type/todoInterface'
export default defineComponent({
  name: 'App',
  components: {
    Header,
    Body,
    Fotter
  },
  setup () {
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        { id: 1, title: '刘舒新', isChecked: false },
        { id: 2, title: '崔健', isChecked: false },
        { id: 3, title: '赵云涛', isChecked: true }
      ]
    })
    const addTodo = todoObj => {
      state.todos.unshift(todoObj)
    }
    const todoDelete = index => {
      state.todos.splice(index, 1)
    }
    const handelChange = obj => {
      // console.log(obj)
      state.todos[obj.index].isChecked = obj.checked
    }
    const onCheckAll = checked => {
      state.todos.forEach(val => {
        val.isChecked = checked
      })
    }
    // 清理选中的数据
    const onClearChecked = () => {
      state.todos = state.todos.filter(val => {
        return val.isChecked === false
      })
    }
    return {
      ...toRefs(state),
      addTodo,
      todoDelete,
      handelChange,
      onCheckAll,
      onClearChecked
    }
  }
})
</script>

<style lang="less">
.todo-list-wrap {
  width: 800px;
  margin: 10px auto;
  border: 2px solid #000;
}
</style>
