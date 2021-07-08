import { Module } from 'vuex'
import { State } from '../index'
type Todo = {
  id: number
  name: string
  completed: boolean
}
const initState = {
  todos: [] as Todo[]
}
// 从一个已有的类型中 推断出TodoState类型
export type TodoState = typeof initState
export default {
  namespaced: true,
  state: initState,
  mutations: {
    initTodo (state, payload: Todo) {
      state.todos = [payload]
    },
    addTodo (state, payload: Todo) {
      state.todos.push(payload)
    }
  },
  actions: {
    initTodo ({ commit }, payload: Todo) {
      setTimeout(() => {
        console.log(payload)

        commit('initTodo', payload)
      }, 1000)
    }
  }
} as Module<TodoState, State>
// Module<S, R>
// S是子模块的state R是跟模块的state
