<template>
  <div :style="{ backgroundColor: titleInfo.color }">
    CompositionChild {{ titleInfo.value }}
  </div>
  <input
    type="text"
    v-model="addName"
    @keydown.enter="addTodo(newTodo(addName))"
  />
  <div v-for="item in todos" :key="item.id">{{ item.name }}</div>
  <h1>store中的state---{{ storeStateComputed }}</h1>
  <h1>Store中的 todos---{{ storeTodos }}</h1>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { PropType } from 'vue'
import { key } from '../../store'
type TitleInfo = {
  value: string
  color: string
}
type Todo = {
  id: number
  name: string
  completed: boolean
}
export default defineComponent({
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true
    }
  },
  setup () {
    //属性声明 就是props
    // defineProps({
    //   titleInfo: {
    //     type: Object as PropType<TitleInfo>,
    //     required: true
    //   }
    // })
    const a = computed(() => {
      // ...mapState(['counter'])
    })
    const store = useStore(key)
    const storeTodos = computed(() => store.state.todos?.todos)
    store.dispatch('todos/initTodo', {
      id: 1,
      name: '1111',
      completed: false
    })
    onMounted(() => {
      console.log(store)
    })
    const todos = ref<Todo[]>([])
    const addName = ref('')
    todos.value.push({ id: 1, name: 'vue3', completed: false })
    const newTodo = (addName: string): Todo => {
      return {
        id: todos.value.length + 1,
        name: addName,
        completed: false
      }
    }
    const addTodo = (todoItem: Todo): void => {
      todos.value.push(todoItem)
      addName.value = ''
    }
    const storeStateComputed = computed(() => {
      return store.state.counter
    })
    return {
      todos,
      addName,
      newTodo,
      addTodo,
      storeStateComputed,
      storeTodos
    }
  }
})
</script>
