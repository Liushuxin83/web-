import { InjectionKey } from 'vue'
import { createStore } from 'vuex'
import todos from './modules/todo'
import { TodoState } from './modules/todo'
import { Store } from 'vuex'

// 1.创建一个 InjectionKey  这样useStore就有强类型了
export const key: InjectionKey<Store<State>> = Symbol()
export type State = {
  counter: number
  // 这里的todos必须要与modules中的todos名字一样
  todos?: TodoState
}

export default createStore({
  state: {
    counter: 0
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todos
  }
})
