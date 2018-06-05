import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    todoList:[]
  },
  mutations: {
    addCount (state,data) {
      state.count = state.count+data
    },
    updateTodoList (state,data){
      state.todoList.push(data)
    },
    subCount(state,data){
      state.count = state.count-data
    }
  }
})