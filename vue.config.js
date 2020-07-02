
module.exports = {
	//配置全局样式变量
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/css/all.scss";`
			}
		}
	},
	//代理跨域
    devServer:{ 
        "proxy":{
            "/api":{
                target:"http://127.0.0.1:3000",
                pathRewrite:{"^/api":""}
            }
        }
    },
    //关闭严格模式eslint
    lintOnSave: false,
  	productionSourceMap: false//隐藏代码
}
