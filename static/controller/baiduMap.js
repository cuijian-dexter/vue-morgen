import {dMap} from '../commons/map'
import userinfo from '../components/userinfo'
export default {
    name: 'baiduMap',
    data () {
        return{
            dmap: null, //map实例
            drawList:null,
            fm:{
                username:null,
                phonenumber:null
            }//存储用户信息          
        }
    },
    created() {
        this.getUserInfo();
    },
    components:{userinfo},
    methods: {
        //获取登录信息
        getUserInfo:function(){
            debugger
            var userjson = sessionStorage.getItem('userjson');
            if(userjson){
                var userInfo = JSON.parse(userjson);
                this.fm = userInfo;
            }else{
                this.$router.push({path:'/login'});
            }
          
        },
        //退出
        exit:function(){
             sessionStorage.setItem('userjson','');
             this.getUserInfo();
        },
        //试试清除绘图的功能
        clearAll: function () {
            debugger;
            for(var i = 0; i < this.drawList.length; i++){
                this.dmap.removeOverlay(this.drawList[i]);
            }
            this.drawList.length = 0;
        }
    },
    mounted(){ // 挂在完成后的生命周期钩子注册
        this.$nextTick(function () {  // 等待下一次更新完成后执行业务处理代码
            dMap("XZIX1WcULRx89t0L5eaG2pEW").then( BMap => {
                var dmap = new BMap.Map("dMap");              // 创建Map实例
                var point = new BMap.Point(116.404, 39.915); // 北京坐标
                dmap.centerAndZoom(point,12);       //设置初始化。zoom：放大比例。3为最小
                // dmap.centerAndZoom('北京'); 
                dmap.enableScrollWheelZoom();      //启用滚轮
                var drawList = [];
                var drawcomplete = function(e){
                    drawList.push(e.draw);
                };
                var styleOptions = {
                    strokeColor:"#FF0000",    //边线颜色。
                    fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
                    strokeWeight: 3,       //边线的宽度，以像素为单位。
                    strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
                    fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
                    strokeStyle: 'solid' //边线的样式，solid或dashed。
                }
                 //实例化鼠标绘制工具
                var drawingManager = new BMapLib.DrawingManager(dmap, {
                    isOpen: true, //是否开启绘制模式
                    enableDrawingTool: true, //是否显示工具栏
                    drawingToolOptions: {
                        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
                        offset: new BMap.Size(5, 5) //偏离值
                    },
                    circleOptions: styleOptions, 
                    polylineOptions: styleOptions, 
                    polygonOptions: styleOptions,
                    rectangleOptions: styleOptions
                });
                //添加鼠标绘制工具监听事件，用于获取绘制结果
                drawingManager.addEventListener('drawcomplete', drawcomplete);
                this.dmap = dmap;
                this.drawList = drawList;
            })
        })
    }
}