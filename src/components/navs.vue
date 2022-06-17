<template>
    <div class="nav-wrap">
        <!-- <el-button @click="jump">cc</el-button> -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item :index="item.path" v-for="(item,indexs) in dataList" :key="indexs">{{item.path}}</el-menu-item>

            <!-- <el-menu-item index="1">处理中心</el-menu-item> -->
            <!-- <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu> -->
            <!-- <el-menu-item index="3">消息中心</el-menu-item> -->
            <!-- <el-menu-item index="4">sss</el-menu-item> -->
        </el-menu>
    </div>
</template>

<script>
 
export default {
    name: 'navs',
    components:{},
    data () {
        return {
            dataList:[], 
            activeIndex: '/home',
        }
    },
    computed: {
        
    },
    mounted () {
        this.getRoutes();
    },
    methods: {
        jump(){
            console.log(this.$router)
        },
        getRoutes(){
            const contexts = require.context('../views',true,/\.vue$/);
            // console.log(contexts,'contexts');
            let routerArr = [];
            contexts.keys().forEach(key=>{
                // console.log(key);
                // 获取组件配置
                const componentConfig = contexts(key).default;
                // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名 
                const routePath = key.replace(/^\.\//,'').replace(/\.vue$/,'');
                // 全局注册组件
                if(routePath !== 'default')
                {
                    routerArr.push({
                        path: '/'+routePath,
                        name: componentConfig.name,//缺少name属性！
                        component: resolve => require([`../views/${routePath}`],resolve)
                    })
                }
               
            });

            console.log(routerArr)
            this.dataList = routerArr;


        },
        handleSelect(key, keyPath){
            console.log(key, keyPath)
            // this.$router.push()
        }
         
          

    }
}
</script>

<style scoped>
    .nav-wrap{
        width: 100%;
        height: 100px;
        background-color: pink;
    }
</style>