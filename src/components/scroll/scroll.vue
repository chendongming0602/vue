<template>
    <div>
       <!-- 不需要下拉刷新 -->
        <scroller 
            :on-infinite="up"
            ref="scroll"
            width="100%"
            v-if="!isAll"
            noDataText="暂无更多内容......"
        >
            <!-- 不需要下拉刷新添加一个div防止空位 -->
            <div style="height: 1px;"></div>
            <slot></slot>
        </scroller>
        
        <!-- 需要下拉刷新 -->
        <scroller
            :on-refresh="below" 
            :on-infinite="up"
            ref="scroll"
            width="100%"
            v-if="isAll"
            noDataText="暂无更多内容......"
        >
            <slot></slot>
        </scroller>
    </div>
</template>
<script>
////////////////////////////////使用说明///////////////////////////////////
//https://www.npmjs.com/package/vue-scroller 依赖库
/*1.
    安装使用main.js进行挂载
    npm i vue-scroller -S
    import VueScroller from 'vue-scroller'
    Vue.use(VueScroller)
*/
/*2.
    父组件调用(父组件外层需要给定位+固定高度)
    <Scroll v-on:below="below" v-on:up="up" :isUp="isUp" :isAll="false">
        循环数据
    </Scroll>
    事件
    below(e){
        let {stop}=e;
        setTimeout(()=>{
            stop();
            console.log("下拉刷新了")
        },1000)
        
    },
    //上拉加载
    up(e){
        let {stop}=e;
        if(全部加载完成) this.isUp=false
        setTimeout(()=>{
            stop();
            console.log("加载")
        },1000)
        
    }
*/
////////////////////////////////使用说明///////////////////////////////////
export default {
    props:{
        //是否已经上拉加载完成
        isUp:{
            type:Boolean,
            default:()=>true
        },
        //是否需要下拉刷新
        isAll:{
            type:Boolean,
            default:()=>true
        }
    },
    data(){
        return{}
    },
    methods:{
        //刷新
        up(){
            //刷新完成
            if(!this.isUp) return this.$refs.scroll.finishInfinite(true);
            this.$emit("up",{
                stop: () => {
                    this.$refs.scroll.finishInfinite();
                }
            });
        },
        //加载
        below(){
            this.$emit("below",{
                stop: () => {
                    this.$refs.scroll.finishPullToRefresh();
                }
            });
        },
    },
}
</script>