<template>
  <div class="b">
    <h1>{{ msg }}</h1>
    <p>{{ message}}</p>
    <div v-html="message1"></div>
    <label for="r1">修改</label><input type="checkbox" v-model="class1" id="r1">
    <div v-bind:class="{'class1':class1}">b来改这行东西吧</div>
    <p>{{inputValue}}</p>
    <input type="text" v-model="msg1" @change="onInput">
    <el-radio-group v-model="radio2">
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group>
  </div>
</template>

<script src="../controller/b.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
