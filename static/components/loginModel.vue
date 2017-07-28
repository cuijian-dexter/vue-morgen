// 显示登录的组件,强行为了用组件，就是试试。没有复用性
<template>
<div>
    <div class="loginModel">
        <ul>
            <li>
                <span>用户名</span>
                <el-input v-model="username" placeholder="请输入用户名"></el-input>
            </li>
            <li>
                <span>密码</span>
                <!--<el-input v-model="password" placeholder="请输入内容"></el-input>-->
                <input type="password" class="el-input__inner" v-model="password"  placeholder="请输入密码">
            </li>
            <li>
                <el-button type="primary" v-on:click="login">登录</el-button>
                <el-button type="warning" v-on:click="reset">重置</el-button>
            </li>
        </ul>
    </div>
</div>
</template>

 <script>
import CryptoJS from 'crypto-js/core';
import MD5 from 'crypto-js/md5';
 export default {
   name:'login-model',
   data() {
       return {
           username:null,
           password:null
       }
   },
   methods: {
      login: function () {
          debugger;
          var userjson = JSON.parse(sessionStorage.getItem('userjsons'));
          if(userjson){
              debugger
              for(var i = 0;i<userjson.length;i++){
                if(userjson[i].username == this.username && userjson[i].password == CryptoJS.MD5(this.password)){
                    debugger;
                    sessionStorage.setItem('userjson',JSON.stringify(userjson[i]));
                    this.$router.push({path:'/'});
                }
              }
              
          }
      },
      reset:function(){
        this.username = '';
        this.password = '';
      }
    }
 }
 </script>
 