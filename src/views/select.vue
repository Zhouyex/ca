<template>
    <div>
        <!-- <select name='2' v-model="chose" multiple>
            <option value="1" >1</option>
            <option value="2" >2</option>
        </select> -->

        <el-select v-model='datas'  multiple>
            <el-option @click.native="clickop(item)" :label='item' :value="item" v-for="(item) in monthData" :key="item"></el-option>
        </el-select>
        <el-button @click="outmon">click</el-button>
        
    </div>
</template>

<script>
export default {
    name:'test',
    data(){
        return{
            chose: ["2"],
            currdate:'2022-05-22',
            monthData:[2,3,4,5,6,7],
            datas:[],
        }
    },
    methods:{
        gets(){
            console.log(this.currdate)
        },
        changeSel(v){
            // return;
            
            console.log(v);
            // this.datas = [3,4,5];
            // console.log(this.datas)
            // this.datas = [3,4,5];

        },
        outmon(){
            console.log(this.datas)
        },
        clickop(v){
            console.log(v)
            this.datas = [3,4,5];
        }
    }
}
</script>