<template>
  <el-row type="flex" justify="center">
    <el-col :span="6">
      <ul>
        <li v-for="(todoItem,index) in getTodoList">
          <p>{{index+1}} {{todoItem}}</p>
          <el-button type="danger" icon="el-icon-delete" plain v-on:click="deleteItem(todoItem)">删除</el-button>
          <el-button type="success" icon="el-icon-check" plain v-on:click="finish(todoItem)">完成</el-button>        
        </li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
export default {
  computed:{
    getTodoList(){
      return this.$store.state.todoList
    }
  },
  methods:{
   deleteItem:function(todoItem){
     this.$store.commit('deleteTodoItem',todoItem);
     this.$store.commit('subCount',1);
    },
    finish:function(todoItem){
      this.$store.commit('subCount',1);
      this.$store.commit('addFinishItem',todoItem);
    }
  }
}
</script>

<style>
ul{
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
li{
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
li p{
  margin-right: auto;
}
</style>
