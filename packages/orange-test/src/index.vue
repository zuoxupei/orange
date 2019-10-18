<template>
<div>
  <div @click="zoneClick">1</div>
  <!-- <div id="zone">222</div> -->
  <div @click="zoneClick2">222</div>
  </div>
</template>
<script>
import  facade from './AppFacade';

export default {
  name:"Zone",
  mounted() {
    // document.getElementById('zone').addEventListener('click',()=>{
    //   console.log('zone222');
    // },false)
  },
  methods: {
    zoneClick() {
      // console.error("zone 点击")
      facade.getInstance("12323").sendNotification('TestCommand',"12******3");
    },
    zoneClick2() {
      console.error("zone 点击222")
    }
  }
}
</script>