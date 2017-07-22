<template>
  <div id="main" class="main">
    <!--头部分-->
    <el-row class="dHead">
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                <div class="icon">
                    <img src="../assets/image/logo.png">
                </div>
            </div>
        </el-col>
    </el-row>
    <!--正文部分-->
    <el-row class="dBody">
        <el-col :span="3">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-message">
                        订单管理
                    </i>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">
                    <router-link to="./b">
                        订单管理
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    <router-link to="./">
                        人员管理
                    </router-link>
                  </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="21">
            <!-- <h1>{{ msg }}</h1>
            <p>{{ message}}</p>
            <button v-on:click="submitForm">发请求</button>
            <div v-html="message1"></div>
            <label for="r1">修改</label><input type="checkbox" v-model="class1" id="r1">
            <div v-bind:class="{'class1':class1}">来改这行东西吧</div>
            <el-button @click="visible = true">按钮</el-button>
            <el-dialog v-model="visible" title="Hello world">
              <p>欢迎使用 Element</p>
            </el-dialog>
            <router-link to="./b" append='true'> 子页面1 </router-link> -->
            <router-view></router-view><!-- 
            <input type="text" v-model="mssg">
            <firstcomponent :inputValue="mssg"></firstcomponent> -->
        </el-col>
    </el-row>
    
    <!-- <secondcomponent v-on:message="recieveMessage"></secondcomponent> -->
  </div>
</template>

<script src="../controller/main.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/b.css"></style>