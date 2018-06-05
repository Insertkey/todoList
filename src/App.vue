<template>
  <div>
    <appheader></appheader>
    <addtodo></addtodo>
    <todolist></todolist>
  </div>
</template>

<script>
import appheader from './components/header.vue'
import addtodo from './components/addtodo.vue'
import todolist from './components/todolist.vue'
export default {
  components:{
    appheader,
    addtodo,
    todolist
  }
}
</script>
