import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
const store = new Vuex.Store({
	// 定义状态
	actions: {
		// 封装一个 ajax 方法
		// doPost (context,data) {
		// 	debugger
		// 	axios({
		// 		method: 'post',
		// 		url: data.url,
		// 		data: data.data
		// 	})
		// }
	}
})
export default store;