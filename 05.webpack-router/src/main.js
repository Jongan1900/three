import Vue from 'vue'
import app from './App.vue'

//路由的安装
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 导入自己router.js
import router from './router'
//mint-ui的安装和使用
import {
    Header,
    Swipe,
    SwipeItem,
    Button 
} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button .name, Button );
//这是MUI的安装和使用
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui-icons-extra.ttf'

import moment from 'moment'
Vue.filter('timestr',function(data,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(data).format(pattern);
})



var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,

    methods: {
       
    }
})