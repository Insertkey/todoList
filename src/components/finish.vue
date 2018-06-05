<template>
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="已完成事项" name="1">
            <div>{{msg}}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return{
      msg:'已完成事件列表',
      activeNames: []
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
el-collapse{

}
</style>

