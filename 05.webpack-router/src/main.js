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

import Vuex from 'vuex'
Vue.use(Vuex);


var cart=JSON.parse(localStorage.getItem("cart")||"[]");
const store = new Vuex.Store({
    state: {
        cart:cart,
    },
    mutations: {
            //更新数据中的商品数量（商品详情数量的更新），当数据的值更变的时候就会更新数据库中数据
            //还有立即购买的数据更新，此处的更新是叠加数量
        addshopcart(state,goodsinfo){
            var flag=false;
            state.cart.some(item=>{
                if(item.id==goodsinfo.id ){
                 item.count +=~~goodsinfo.count
                    flag=true;
                    return true;
                }
            })
            if(!flag){
                state.cart.push(goodsinfo);
            }
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
    //更新数据中的商品数量（结算页面的更新），当数据的值更变的时候就会更新数据库中数据
        updatashopnum(state,obj){
            state.cart.some(item=>{
                if(item.id==obj.id){
                    item.count=~~obj.count;
                    return true;
                }
            })
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        //同步删除数据中的商品数据，
        removecart(state,id){
            // 通过传入的id值，循环遍历寻找相对应的数据
                state.cart.some((item,i)=>{
                    if(item.id==id){
                        // 通过使用数组中的splice移除对应第i项数据
                        state.cart.splice(i,1);
                        //返回true。表示当前已经执行完成，减少不必要的的内存运行
                        return true;
                    }
                })
                //同步更新本地内存当中的数据
                localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        //同步更新被勾选的种类
        updataselected(state,info){
            state.cart.forEach(item=>{
                //当button该变的时候，传入数据的id还有被勾选的状态修改现有的数据
                if(item.id==info.id){//寻找相同数据，
                    item.selected=info.selected;//修改选中状态
                }
            })
            //同步更新到本地的存储当中
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
       
        

    },
    getters:{
        //计算并更新购物车的总体数量
        getAllCount(state){
            var c=0;
            state.cart.forEach(element => {
                //遍历所有的商品把购物车的数量相加
                    c+= element.count;
            });
            //返回一个数值c
            return c

        },
        //同步数据获取并计算当前商品id的对应的选中状态
        getselected(state){
            var o={};
            state.cart.forEach(item=>{
                o[item.id]=item.selected;

            })
            return o;
        },
         //计算价格之和
        gettotal(state){
            var o={
                total:0,//总价
                selectednum:0//被勾选的数量
            }
            state.cart.forEach(item=>{
                if(item.selected){//判断是否勾选
                    o.selectednum+=item.count;//勾选的数量之和
                    o.total+=item.price*item.count;//所有被勾选的价格之和
                }
            })
            return o
        },
    }
})


var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,
    store:store,
    methods: {

    }
})