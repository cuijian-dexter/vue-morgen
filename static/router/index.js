import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import main from '@/components/main.vue'
import b from '@/components/b.vue'
Vue.use(Router)
Vue.use(ElementUI)

const routes = [
  {
    path: '/',
    name: 'main',
    component: main,
    children:[{
      path: 'b',
      component:b
    },{
      path: 'c',
      component:b
    }]
  },{
    path: '/b',
    name: 'b',
    component: b
  }
];

const router = new Router({
  routes:routes
})

export default router;
// export default new Router({
//   routes: [
//     {
//       path: '/app',
//       name: 'Hello',
//       component: Hello,
//       children:[{
//         path: '/b',
//         component:b
//       }]
//     }
//   ]
// })
