// 1. 导入 vue-router 包
// 2. 手动安装 VueRouter 
// 导入 app 组件
//  导入 自定义路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './App.vue'
import router from './router.js'

//引入mint-ui的所有内容
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'	
// Vue.use(MintUI)	

// import { Toast } from 'mint-ui';
//引入bootstrap
import './css/app.css'
import  'bootstrap/dist/css/bootstrap.css'
import '../lib/mui/css/mui.css'
// import '../lib/mui/js/mui.min.js'
// import './js/mui.js'

import { Button } from 'mint-ui';

Vue.component('mybtn', Button);

var vm = new Vue({
  el: '#app',
  // render:function(c){
  //   return c(login)
  // }
  // render :c=>c(login)
  render: c => c(app),
  router,
 
})

// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；