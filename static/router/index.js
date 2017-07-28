import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import baiduMap from '@/views/baiduMap.vue'
import login from '@/views/login.vue'
import b from '@/views/b.vue'
Vue.use(Router)
Vue.use(ElementUI)

const routes = [
  {
    path: '/',
    name: 'baiduMap',
    component: baiduMap,
    children:[{
      path: 'b',
      component:b
    },{
      path: 'c',
      component:b
    }]
  },{
    path: '/login',
    name: 'login',
    component: login
  }
];

const router = new Router({
  routes:routes
})

export default router;
