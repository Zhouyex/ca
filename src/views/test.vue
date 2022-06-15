<template>
  <div id="ww">

    <!-- <div v-for="(item,index) in textArr" :key='index'>
        <scrolls :msg='item.title' :ids='item.id' />
    </div> -->

    <div>
        <div>
            <el-tag>预警</el-tag>
            <el-tag>舆情</el-tag>
        </div>
        <div>
            <el-tag>近七天</el-tag>
            <el-tag>近半年</el-tag>
        </div>

        <div>
            <el-input placeholder="搜索"></el-input>
        </div>

        <div class="swiper-container swiper-no-swiping list ">
            <div v-for="(item,index) in textArr" :key="index">
                {{item.tag}}
                <scrolls :msg='item.title' :ids='item.id' />

            </div>
        </div>

        <!-- <vert /> -->

    </div>

  </div>
</template>

<script>
import son from './son.vue'
import scrolls from '../components/scroll.vue'
// import vert from './vert.vue'
export default {
    name: 'scroll',
    components:{scrolls,son},
    data () {
        return {
            textArr: [
                {tag:'111测试111',num:0,title:'1 第1条公告111111111111111',id:'1'},
                {tag:'111测试222',num:0,title:'2 第2条公告嘎嘎嘎嘎嘎嘎灌灌灌灌灌',id:'2'},
                {tag:'111测试333',num:0,title:'3 第3条公告嘎嘎嘎嘎嘎嘎灌灌灌灌灌',id:'3'},
                {tag:'111测试444',num:0,title:'4 第4条公告嘎嘎嘎嘎嘎嘎灌灌灌灌灌',id:'4'},
                {tag:'111测试555',num:0,title:'5 第5条公告嘎嘎嘎嘎嘎嘎灌灌灌灌灌',id:'5'},
            ],
            tx:[],
            number: 0,

            treeData:[
                {
                    index_id:'s111',
                    index_name:'第一个',
                    children:[
                        {
                            index_id:'s1-1',
                            index_name:'第一1个'
                        },
                        {
                            index_id:'s1-2',
                            index_name:'第一2个'
                        },
                        {
                            index_id:'s1-3',
                            index_name:'第一3个',
                            children:[
                                {
                                    index_id:'s1-3-1',
                                    index_name:'第33个' 
                                },
                                {
                                    index_id:'s1-3-2',
                                    index_name:'第32个'
                                }
                            ]
                        },
                    ]
                }
            ],

            timer:null,
            mySwiper:null,


        }
    },
    computed: {
        
    },
    mounted () {
        if(this.timer)
        {
            clearTimeout(this.timer);
        }
        this.mySwiper = null;

        // this.initSwiper(); 
    },
    methods: {

        initSwiper(){
            console.log('sss')
            this.timer = setTimeout(()=>{
                console.log(1)

                this.mySwiper = new Swiper('.swiper-container',{
                    loop : true,
                    direction : 'vertical',
                    autoplay : 1000,
                    spaceBetween : 20,

                })

            },300)
        }
          

    }
}
</script>

<style scoped>
    .el-tag{
        cursor: pointer;
    }
    .list{
        background-color: pink;
        
    }
    .swiper-container{
        width: 100%;
        height: 200px;
        overflow: hidden;
        background: red;
    }
</style>