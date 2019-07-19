
<template>
<div class='test-box'>

<el-card class='search-panel'>
  <el-form
  ref="form"
  :model="form"
  :rules="rules"
  :inline="true"
  >
  <el-col :span=24>
  
      
      <el-form-item
        label="活动名称"
        prop="activityName">
        
        
        <el-input v-model="form.activityName" placeholder="请输入活动名称"></el-input>
        
        
      </el-form-item>
  
      
      <el-form-item
        label="活动时间"
        prop="timeRange">
        
        <el-date-picker
          v-model="form.timeRange"
          placeholder="请选择活动时间"
          type="datetime"
          />
        
        
        
      </el-form-item>
  
      
      <el-form-item
        label="渠道"
        prop="clientType">
        
        
        
        <el-select v-model="form.clientType" placeholder="请选择渠道">
        
          
          <el-option :value='1'>app</el-option>
          
          <el-option :value='2'>小程序</el-option>
          
        
        </el-select>
        
      </el-form-item>
  
  </el-col>
  </el-form>
</el-card>

</div>
</template>


<script>
  export default {
    data() {
      return {
        
        form: {
          
          
          activityName:'',
          
          
          timeRange:[],
          
          
          clientType:'',
           
        },
        rules: {
          
          
           
          activityName: [
            {
              required: true, message: '请选择活动名称', type: 'string', trigger: 'change'
            }
          ],
          
          
          
           
          timeRange: [
            {
              required: true, message: '请选择活动时间', type: 'Array', trigger: 'change'
            }
          ],
          
          
          
          
           
        }
         
      }
    },
    mounted () {

    },
    methods: {

    }
  };
</script>


<style lang="scss" scoped>
.test-box {
  
  flex: 1; 
  display: flex; 
  flex-direction: column; 
  padding: 0;
  .search-panel {
    padding-bottom: 10px;
    .search-btn {
      padding: 5px 0;
      .float-right {
        float: right;
      }
    }
  }
   
}
</style>