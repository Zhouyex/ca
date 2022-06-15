<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">1</el-col>
            <el-col :span="6">1</el-col>
            <el-col :offset="6" :span="6">1</el-col>
            <!-- <el-col :span='6'>1</el-col> -->
        </el-row>
        <el-table
            :data="tableData"
            style="width: 100%"
            :row-style='rowfunc'
            >
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>
 
<script>

export default {
    name: "HelloWorld",
    data() {
        return{
            tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    created(){
    },
    mounted() {
        

    },
    methods: {
        rowfunc({row,rowIndex}){
            console.log(row,'row',rowIndex);
            let styleObj = {};
            if(rowIndex%2 == 0)
            {   
                styleObj={
                    'background':'pink'
                }
            }else{
                styleObj={
                    'background':'blue'
                }
            }
            return styleObj;
        } 
        
         
    }
};
</script>
<style scoped>
    
</style>