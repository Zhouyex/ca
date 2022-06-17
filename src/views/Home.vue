<template>
    <div class="home-wrap">
        <el-button @click='homeclick'>home</el-button>

         


         


    </div>
</template>
 
<script>
 
 
export default {
  name: 'home',
  data(){
    return {
       
    }
  },
  mounted() {
    this.homeclick()
  },
  methods: {
     
    homeclick(){
        console.log(111)
    }
 
  }
}
</script>
 
<style scoped>
    .list-wrap{
        /* background-color: red; */
        display: flex;
        width: 100%;
        align-items: center;
    }
    .left-name{
        white-space: nowrap;
        padding-right: 10px;
    }
    .right-line{
        width: 100%;
    }
    .line{

        border: 1px solid #222;
        width: 100%;
    }
    
  
</style>