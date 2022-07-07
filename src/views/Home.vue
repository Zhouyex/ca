<template>
    <div class="home-wrap">
        分组
    </div>
</template>
 
<script>
export default {
  name: 'home',
  data(){
    return {
        dataList:[
            {
                type:'name',
                age:11
            },
            {
                type:'wudi',
                age:55
            },
            {
                type:'wudi',
                age:23
            },
            {
                type:'name',
                age:113
            },
            {
                type:'cont',
                age:92
            }
        ],
        dataList1:[
            {
                type:'name1',
                age:11111
            },
            {
                type:'wudi1',
                age:55
            },
            {
                type:'wudi1',
                age:23
            },
            {
                type:'name1',
                age:113
            },
            {
                type:'cont1',
                age:92
            }
        ]
    }
  },
  components:{
  },
  mounted() {
    let d1 = this.sortKey(this.dataList,'type') 
    let d2 = this.sortKey(this.dataList1,'type') 
    console.log(d1)
    console.log(d2)
  },
  methods: {
        sortKey(data,k){
            return data.reduce((prev, cur) => {
                var key = cur[k];
                if (!prev[key]) {
                prev[key] = []
                }
                prev[key].push(cur)
                return prev
            }, {})
        },
 
  }
}
</script>
 
<style scoped>
</style>