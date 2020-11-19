import {GET_TOKEN} from "../type"
export default{
    state:{
        my_token:"我是token"
    },
    getters:{
        [GET_TOKEN]:state=> state.my_token
    },
    mutations:{
        [GET_TOKEN](state,value){
            console.log("模块被调用了")
        }
    },
    actions:{
        [GET_TOKEN]({commit},value){
            commit(GET_TOKEN)
        }
    }
}