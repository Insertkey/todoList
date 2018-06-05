<template>
  <div>
    <h2>还有{{getCount}}件事未完成</h2>
    <div id="todo">
      <el-input
      placeholder="添加未完成事项"
      v-model="addtodo"
      clearable>
      </el-input>
      <el-button type="primary" icon="el-icon-edit" @click="addTodoList">添加</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      addtodo:''
    }
  },
  computed:{
    getTodoList(){
      return this.$store.state.todoList
    },
    getCount() {
      return this.$store.state.count
    }
  },
  methods:{
    addTodoList:function(){
      this.$store.commit('addCount',1);
      this.$store.commit('updateTodoList',this.addtodo);
      this.addtodo='';
    }
  }
}
</script>

<style>
#todo{
  text-align: center;
  margin: 0 auto;
}
.el-input{
  width: 350px;
}
</style>
