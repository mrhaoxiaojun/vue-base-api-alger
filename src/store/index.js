import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    evenNumber: state => {
      return state.count % 2 ? false : true
    }
  },
  mutations: {
    increment(state, val = 1) {
      state.count += val;
    },
    decrement(state, val = 1) {
      state.count -= val;
    }
  },
  actions: {
    incrementAsync({ commit }, val = 1) {
      setTimeout(() => {
        commit('increment', val)
      }, 1000)
    },
    decrementAsync({ commit }, val = 1) {
      setTimeout(() => {
        commit('decrement', val)
      }, 1000)
    }
  },
  modules: {
  }
})
