import Vue from 'vue'
import app from './App.vue'

//路由的安装
import VueRouter from 'vue-router'
Vue.use(VueRouter)




// 引入缩略图插件2
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// 导入自己router.js
import router from './router'
//mint-ui的安装和使用
// import {
//     Header,
//     Swipe,
//     SwipeItem,
//     Button,
//     Lazyload
// } from 'mint-ui';
//  import { Lazyload } from "mint-ui";
// Vue.use(Lazyload);
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

//这是MUI的安装和使用
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui-icons-extra.ttf'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import moment from 'moment'
Vue.filter('timestr', function (data, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(data).format(pattern);
})



var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,

    methods: {

    }
})