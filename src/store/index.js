import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    todoList:[],
    finishList:[]
  },
  mutations: {
    addCount (state,data) {
      state.count = state.count+data
    },
    addTodoList (state,data){
      state.todoList.push(data)
    },
    subCount(state,data){
      state.count = state.count-data
    },
    deleteTodoItem(state,todoItem){
       //splice方法参考了官方文档，原本用filter方法会导致数组全部清空
      state.todoList.splice(state.todoList.indexOf(todoItem), 1);
    },
    addFinishItem(state,todoItem){
      state.finishList.push(todoItem);
      //splice方法参考了官方文档，原本用filter方法会导致数组全部清空
      state.todoList.splice(state.todoList.indexOf(todoItem), 1);
    }
  }
})