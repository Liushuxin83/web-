import { createStore } from 'vuex'

export default createStore({
  state: {
    isShow: true
  },
  mutations: {
    hide (state) {
      state.isShow = false
    },
    show (state) {
      state.isShow = true
    }
  },
  actions: {},
  modules: {}
})
