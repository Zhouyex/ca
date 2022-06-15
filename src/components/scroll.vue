<template>
    <div>
        <div :id="'gundong'+ids" @mouseover="over" @mouseout="out" class="allwrap">
            <div :id="'gundongAreaMain'+ids" class="txtwrap1">
                <div :id="'gundongAreaMainins'+ids" class="txtwrap2">
                    <!-- 丁又丁不懂，鞋又鞋不会，就只能偷偷电瓶车这个样子 -->
                    {{msg}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'scroll',
    data () {
        return {
            show:false,
            wrap:null,
            wrap1:null,
            wrap2:null,
            speed:30,
            mar:null,
        }
    },
    props:{
        msg:String,
        ids:String
    },
    mounted(){
        this.wrap=document.getElementById("gundong"+this.ids);
        this.wrap1=document.getElementById('gundongAreaMainins'+this.ids);
    },
    methods: {
        move(){
            // console.log(this.wrap.scrollLeft)
            if(this.wrap1.offsetWidth - this.wrap.scrollLeft <= 0)
            {   
                this.wrap.scrollLeft-=this.wrap1.offsetWidth
            }else{
                this.wrap.scrollLeft++;
            } 
        },
        over(){
            this.mar = setInterval(this.move,this.speed);
        },
        out(){
            clearInterval(this.mar);
            this.wrap.scrollLeft = 0;
        }
    }
}
</script>

<style scoped>
 
.allwrap {
/* background: #FFF; */
cursor: pointer;
overflow:hidden;
/* border: 1px dashed #CCC; */
/* width: 100%; */
width: 200px;
font-size: 12px;
height: 20px;
line-height: 20px;
padding: 5px;
}
.txtwrap1{
    float: left;
    width: 200%; 
}
.txtwrap2{
    float: left;
}
</style>