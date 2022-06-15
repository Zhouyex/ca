<template>
    <div class="head-wrap">
        头部
        <el-button type='primary'> 测试</el-button>
        <i class="fa fa-address-book-o"></i>
  </div> 
</template>


<script>


export default {
  name: 'Header',
  components: {
    
  }
}
</script>

<style lang="less">
    .head-wrap{
        width: 100%;
        height: 100%;
        background: #222;
        color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3vw;
    }
</style>