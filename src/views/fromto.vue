<template>
    <div class="home-wrap">
        <div class="line" v-for="(item,index) in list" :key='index'>
            <div>
                <el-input v-model='arr1[index]'></el-input>
            </div>
            <div>
                <el-input v-model="arr2[index]"></el-input>
            </div>
            <el-button v-show="index == list.length-1" @click='add(index+2)'>+</el-button>
        </div>
        <el-button @click="save">ok</el-button>
        <div id="txt1"> </div>
        <div id="txt2"> </div>
        <div id="txt3"> </div>
        <div id="txt4"> </div>
    </div>
</template>
 
<script>
 
 
export default {
  name: 'home',
  data(){
    return {
        list:['1'],
        arr1:[],
        arr2:[],
    }
  },
  mounted() {
   
  },
  methods: {
        getArr(){
            this.arr1 = this.arr1.filter(item=>item!=='');
            this.arr2 = this.arr2.filter(item=>item!=='');
        },
        add(v){
            this.getArr();
            if(this.arr1.length !== this.arr2.length || this.arr1.length==0 || this.arr2.length==0 || this.list.length !==this.arr1.length || this.list.length !==this.arr2.length)
            {   
                this.$message.warning('不可添加！')
                return;
            }
            this.list.push(v)
        },
        save(){
            this.getArr();
            if(this.arr1.length !== this.arr2.length || this.arr1.length==0 ||  this.arr2.length==0)
            {   
                this.$message.warning('写完整')
                return;
            }
            this.$message.success('走接口')

            // let txt1 = this.arr1.join(',')
            // let txt2 = this.arr2.join(',')
            // let txt3 = this.arr1.length;
            // let txt4 = this.arr2.length;
            // document.querySelector('#txt1').innerHTML = txt1;
            // document.querySelector('#txt2').innerHTML = txt2;
            // document.querySelector('#txt3').innerHTML = txt3;
            // document.querySelector('#txt4').innerHTML = txt4;
        }
     
 
  }
}
</script>
 
<style scoped>
     
    .line{
        display: flex;

    }
  
</style>