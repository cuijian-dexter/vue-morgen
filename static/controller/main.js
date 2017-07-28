import firstcomponent from '../views/b.vue'
import secondcomponent from '../views/b.vue'
import axios from 'axios'
// import {Toast} from 'mint-ui'

export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到 Vue.js App',
      message: 'i am dexter ',
      message1: '<h1>我是路飞</h1>',
      class1: false,
      mssg: '頁面之間傳遞的數據',
      visible:false
    }
  },
  components:{firstcomponent,secondcomponent},
  methods:{
  	recieveMessage: function (text) {
  		debugger
  		console.log('監聽到子組件的變化' +text);
  	},
  	submitForm () {
  		debugger
  		this.$store.dispatch('doPost',{url:'user110',data:[{id:'1001'}]}).then(function(response){

  		})
  	},
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}