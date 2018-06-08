<template>
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :span="6">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="已完成事项" name="1">
          <ul>
            <li v-for="(item,index) in getFinishList">{{index+1}} {{item}}</li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return{
      activeNames: []
    }
  },
  computed:{
    getFinishList(){
      return this.$store.state.finishList;
    }
  },
  methods: {
    handleChange() {
      if (this.activeNames[0]!==1){
        this.activeNames.push(1);
      }
      else{
        this.activeNames.pop;
      }
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
  justify-content: flex-start;
}
</style>

