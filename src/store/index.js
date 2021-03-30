import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 10
  },
  mutations: {
    update(state) {
      state.counter += 1
    }
  },
  actions: {
  },
  modules: {
  }
})
