<template>
  <div>
    <appheader></appheader>
    <addtodo></addtodo>
    <todolist></todolist>
    <finish></finish>
  </div>
</template>

<script>
import appheader from './components/header.vue'
import addtodo from './components/addtodo.vue'
import todolist from './components/todolist.vue'
import finish from './components/finish.vue'
export default {
  components:{
    appheader,
    addtodo,
    todolist,
    finish
  }
}
</script>
