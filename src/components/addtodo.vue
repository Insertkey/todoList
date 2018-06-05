<template>
  <div>
    <h2>还有{{count}}件事未完成</h2>
    <div id="todo">
      <el-input
      placeholder="添加未完成事项"
      v-model="addtodo"
      clearable>
      </el-input>
      <el-button type="primary" icon="el-icon-edit" @click="addTodoList">添加</el-button>
    </div>
    <ol>
      <li v-for="todo in todolist">{{todo}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data(){
    return{
      count:0,
      addtodo:'',
      todolist:[]
    }
  },
  methods:{
    addTodoList:function(){
      this.todolist.push(this.addtodo);
      this.count++;
      this.addtodo='';
      console.log(this.todolist);
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
  width: 280px;
}
</style>
