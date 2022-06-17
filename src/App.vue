<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <div>
        <el-button @click="jumps" >测试</el-button>
    </div> -->

    <navs />

    <router-view/>

  </div>
</template>

<script>
import navs from './components/navs.vue'
export default {
    name:'App',
    data(){
        return{

        }
    },
    components:{
        navs
    },
    mounted(){
         
    },
    methods:{
         
    },
}
</script>

<style lang="less">
#app{
  width: 100%;
  height:100%;
}

html,body{
  width: 100vw;
  height: 100vh;
  margin:0;
}
</style>
