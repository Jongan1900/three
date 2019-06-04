import VueRouter from 'vue-router'
import home from './components/tabbar/HomeContainer.vue'
import member from'./components/tabbar/MemberContainer.vue'
import search from './components/tabbar/SearchContainer.vue'
import shopcart from  './components/tabbar/ShopcartContainer.vue'


const router = new VueRouter({
    routes:[{path:'/',redirect:'/home'},{
        path:"/home",component:home
    },{
        path:"/member",component:member
    },{
        path:"/search",component:search
    },{
        path:"/shopcart",component:shopcart
    }],  
    linkActiveClass:'mui-active'
})



export default router;