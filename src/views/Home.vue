<template>
  <div class="map">
    <div id="main" class='charts'></div>
  </div>
</template>
 
<script>
 
import * as echarts from "echarts";
import dataJson from "../util/mapdata.json";
export default {
  name: 'home',
  data(){
    return {
      dataList:[
        {name: '北京',value: this.randomData() },
        {name: '天津',value: this.randomData() },
        {name: '上海',value: this.randomData() },
        {name: '重庆',value: this.randomData() },
        {name: '河北',value: this.randomData() },
        {name: '河南',value: this.randomData() },
        {name: '云南',value: this.randomData() },
        {name: '辽宁',value: this.randomData() },
        {name: '黑龙江',value: this.randomData() },
        {name: '湖南',value: this.randomData() },
        {name: '安徽',value: this.randomData() },
        {name: '山东',value: this.randomData() },
        {name: '新疆',value: 0 },
        {name: '江苏',value: this.randomData() },
        {name: '浙江',value: this.randomData() },
        {name: '江西',value: this.randomData() },
        {name: '湖北',value: this.randomData() },
        {name: '广西',value: this.randomData() },
        {name: '甘肃',value: this.randomData() },
        {name: '山西',value: this.randomData() },
        {name: '内蒙古',value: this.randomData() },
        {name: '陕西',value: this.randomData() },
        {name: '吉林',value: this.randomData() },
        {name: '福建',value: this.randomData() },
        {name: '贵州',value: this.randomData() },
        {name: '广东',value: this.randomData() },
        {name: '青海',value: this.randomData() },
        {name: '西藏',value: this.randomData() },
        {name: '四川',value: this.randomData() },
        {name: '宁夏',value: this.randomData() },
        {name: '海南',value: this.randomData() },
        {name: '台湾',value: this.randomData() },
        {name: '香港',value: this.randomData() },
        {name: '澳门',value: this.randomData() }
      ]
    }
  },
  mounted() {
    this.drawLine();
 
  },
  methods: {
    randomData() {
      return Math.round(Math.random()*500);
    },
    drawLine(){
        console.log(echarts);
        let myChart =  echarts.init(document.getElementById("main"));
        

        let option = {
            geo: {
                map: "china",
                aspectScale: 0.75,
                zoom: 1.1,
                zlevel:2,
                // roam:true,
                show: true,
                itemStyle: {
                    normal: {
                        areaColor: {
                            colorStops: [
                                // 阴影颜色
                                {
                                    offset: 1,
                                    color: "#4d4d4f"
                                }
                            ],
                            // globalCoord: false
                        },
                        // 阴影颜色
                        shadowColor: "#4d4d4f",
                        shadowOffsetX: 10,
                        shadowOffsetY: 11
                    },
                }
            },
            tooltip: {
                formatter: '{b}:{c}'
            },
            // 省会的位置标注
            // legend: {
            //   orient: 'vertical',
            //   left: 'left',
            //   data:['']
            // },
            visualMap: {
                min: 0,
                max: 1500,
                left: '10%',
                top: 'bottom',
                text: ['高','低'],
                calculable : true,
                color:['#0b50b9','#FFFFFF']
            },
            
            series: [
            {
                zoom: 1.1,
                map: "china",
                zlevel:3,
                // geoIndex:2,
                layoutCenter:['50%','50%'],
                type: "map",
               
                itemStyle: {
                    // normal:{
                    //     borderColor: 'rgba(0, 0, 0, 0.2)'
                    // },
                    // emphasis:{
                    //     shadowOffsetX: 0,
                    //     shadowOffsetY: 0,
                    //     shadowBlur: 20,
                    //     borderWidth: 0,
                    //     // shadowColor: 'rgba(0, 0, 0, 0.5)'
                    // }
                },
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        // show: false
                    }
                },
                // data:this.dataList
            }
            ],
        };
        console.log(option)

        let uploadDataUrl = dataJson;
        // 注册地图
        echarts.registerMap("china", uploadDataUrl);

        myChart.setOption(option);
        window.onresize=function(){
            myChart.resize();
        }
    }
 
  }
}
</script>
 
<style scoped>
 
.charts{
  min-height: 512px;
  min-width: 800px;
 
 
}
.charts:first-child div{
  position: static !important;
  width: 100% !important;
}
/* /deep/ canvas{
  width: 100% !important;
  height: 100% !important;
} */
</style>-