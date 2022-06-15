<template>
    <div id="apps">
        <!-- <so-marquee
            :data="jsonData"
            :height="200"
            :showNumber="5"
            :speed="500"
            class="my-ui-marquee"
            @handleClick="handleMarqueeClick"
        >
            <template v-slot:itemCon="{item}">
                <div>{{ item.id }}</div>
                <div>{{ item.name }}</div>
                <div>{{ item.date }}</div>
            </template>
        </so-marquee> -->

        <ul>
            <li v-for="(item,index) in jsonData" :key='index'>
                {{item.name}}
                <el-button @click="open(item)">ddd</el-button>
            </li>
        </ul>
        <el-dialog :visible='visible' @close='visible=false'>
            <el-button :disabled='jinzhi'>ddd</el-button>
        </el-dialog>
 
        <el-tooltip content="wudi" effect="light" placement="top">
            <div style="display:inline-block">
                <el-button disabled>测试</el-button>
            </div>
        </el-tooltip>


    </div>
</template>

<script>
import soMarquee from './vert.vue'

export default {
    name: 'Apps',
    data() {
        return {
            visible:false,
            jinzhi:false,
            jsonData: [
                {
                    id: 1,
                    name: "开会通知",
                    date: "2020-02-01"
                },
                {
                    id: 2,
                    name: "放假通知",
                    date: "2020-02-02"
                },
                {
                    id: 3,
                    name: "停水通知",
                    date: "2020-02-03"
                },
                {
                    id: 4,
                    name: "停电通知",
                    date: "2020-02-04"
                },
                {
                    id: 5,
                    name: "停车通知",
                    date: "2020-02-05"
                },
                // {
                //     id: 6,
                //     name: "奖励通知",
                //     date: "2020-02-06"
                // },
                // {
                //     id: 7,
                //     name: "处分通知",
                //     date: "2020-02-07"
                // },
                // {
                //     id: 8,
                //     name: "处分8通知",
                //     date: "2020-02-08"
                // },
                // {
                //     id: 9,
                //     name: "处分9通知",
                //     date: "2020-02-09"
                // },
                // {
                //     id: 10,
                //     name: "处分10通知",
                //     date: "2020-02-10"
                // },
            ]
        }
    },
    components: {
        soMarquee
    },
    methods: {
        handleMarqueeClick(row) {
            console.log(`当前点击的第${row.id}行`)
        },
        open(v)
        {
            this.visible = true;
            this.jinzhi = v.id > 3 ? true : false;
        }
    }
}
</script>

<style >
/* .my-ui-marquee {
    ::v-deep.marquee-item {
        cursor: pointer;
    }
} */
.marquee-item {
    cursor: pointer;
}
</style>
