<template>
    <div class="home-wrap">
        <el-button @click='homeclick'>home</el-button>

        <div class="list-wrap">
            <div class="left-name">
                test name
            </div>
            <div class="right-line">
                <div class="line"></div>
            </div>
        </div>


        <div class="list-wrap">
            <div class="left-name">
                是德州水电费
            </div>
            <div class="right-line">
                <div class="line"></div>
            </div>
        </div>
        <div class="list-wrap">
            <div class="left-name">
                是德
            </div>
            <div class="right-line">
                <div class="line"></div>
            </div>
        </div>


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