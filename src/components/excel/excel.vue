<template>
    <div @click="exportExcel">
        点击导出
    </div>
</template>

<script>
/*
使用
安装依赖
    npm i file-saver xlsx -S 
    npm i script-loader -D
    必须有src下的vendor文件夹和里面文件
    直接更换数据调用即可
*/ 
export default {
    data(){
        return{}
    },
    methods:{
        exportExcel() {
            require.ensure([], () => {
                const { export_json_to_excel } = require("@/vendor/Export2Excel");
                // 头部
                const tHeader = [
                "姓名",
                "性别",
                "住址"
                ];
                //filterVal 对应的下面数组list的每个字段,例如list = [{name:'胡歌',sex:'男',address:'上海'}]
                const filterVal = [
                "name",
                "sex",
                "address"
                ];
                //list为要导出的数据
                const list = [{name:'胡歌',sex:'男',address:'上海'}];
                const data = this.formatJson(filterVal, list);
                export_json_to_excel(tHeader, data, "excel列表");
            });
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]));
        }
    }
}
</script>