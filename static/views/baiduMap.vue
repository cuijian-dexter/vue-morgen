 <template>
    <div id="baiduMap" class="baiduMap">
      <el-row :gutter="5" class="userInfo">
        <el-col :span="4">
          <userinfo :uservalue="fm.username"></userinfo>
        </el-col>
        <el-col :span="4">
          <userinfo :uservalue="fm.phonenumber"></userinfo>
        </el-col>
      </el-row>
      <el-button type="button" class="exit" v-on:click="exit">退出</el-button>
      <el-button type="button" class="clearAll" v-on:click="clearAll">清除所有点线面</el-button>
      <div id="dMap"></div>
    </div>
 </template>

<script src="../controller/baiduMap.js"></script>
