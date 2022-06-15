import Vue from 'vue'
import VueRouter from 'vue-router'
 
Vue.use(VueRouter)

const contexts = require.context('../views',true,/\.vue$/);
console.log(contexts,'contexts');
let routerArr = [];
contexts.keys().forEach(key=>{
    console.log(key);

    // 获取组件配置
    //debugger
    const componentConfig = contexts(key).default;
    // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名 
    const routePath = key.replace(/^\.\//,'').replace(/\.vue$/,'');
    // 全局注册组件
    routerArr.push({
        path: '/'+routePath,
        name: componentConfig.name,//缺少name属性！
        component: resolve => require([`../views/${routePath}`],resolve)
    })
    
})

console.log(routerArr,'routerArr');

const router = new VueRouter({
//   routes
    mode:'history',
    routes:[
        ...routerArr,
        {
            path:'/',
            redirect:'/test',
            component:()=>import ('../views/now.vue')
        },
        {
            path:'*',
            redirect:'/default',
            component:()=>import ('../views/default.vue')
        }
    ]
})

export default router
 

