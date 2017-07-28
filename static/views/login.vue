 <template>
    <div id="login" class="login">
        <!--<div v-for="value in fm">-->
            <login-model></login-model>
        <!--</div>-->
    </div>
 </template>

 <script>
 import loginModel from '../components/loginModel'
 export default {
    name:'login',
    data () {
        return{
            dmap: null, //map实例
            drawList:null
        }
    },
    components:{loginModel},
    created() {
        this.setSessionStorage();
    },
    methods: {
        //模拟登录，设置sessionStorage
        setSessionStorage:function(){
            var userjson = [{
                username:'小D',
                password: 'e10adc3949ba59abbe56e057f20f883e',//123456
                phonenumber: '18380463136'
            },{
                username:'小E',
                password: 'e10adc3949ba59abbe56e057f20f883e',//123456
                phonenumber: '18333333333'
            }]
            sessionStorage.setItem('userjsons',JSON.stringify(userjson));
        },
        //试试清除绘图的功能
        clearAll: function () {
            debugger;
            for(var i = 0; i < this.drawList.length; i++){
                this.dmap.removeOverlay(this.drawList[i]);
            }
            this.drawList.length = 0;
        }
    }
 }
 </script>
 