import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'//引入store(vuex)
Vue.use(Router)

// export default new Router({
//   routes: [
//       {path:'/',component:Home,
//       },
//       {path:"/detail",component:Detail,
//         children:[
//           {
//             path:"/a",
//             component:DetailA
//           },
//           {
//             path:"/b",
//             component:DetailB
//           }
//         ]
//       }
//   ]
// })

const router=new Router({
  routes: [
          {
            path:'/',
            component:() => import('@/pages/login.vue'),
            meta:{
              is:false
            }
          },
      ]
})
// 1、to:即将要进入的目标路由对象；

//   2、from:当前导航即将要离开的路由对象；

//   3、next ：调用该方法后，才能进入下一个钩子函数（afterEach）。

//         next()//直接进to 所指路由
//         next(false) //中断当前路由
//         next('route') //跳转指定路由
//         next('error') //跳转错误路由
  router.beforeEach((to,from,next)=>{

    next();
    
  })
 export default router;