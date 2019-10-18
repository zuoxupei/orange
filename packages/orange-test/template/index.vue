<template>
  <div @click="testClick">11</div>
</template>
<script>
export default {
  methods:{
    testClick() {
      console.log("111")
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  margin: 20px;
}
</style>