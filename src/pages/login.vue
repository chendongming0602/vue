<template>
    <div class="loginTop" @click="login">
       我是登录
    </div>
    
</template>


<script>
export default {
    data(){
        return {
            name:"",
            pwd:""
        }
    },
    created(){

    },
    methods:{
        login(){

        },
      
    },
   
}
</script>

<style  lang="scss" type="text/css" >
 
    div{
        color: $color;
    }

</style>