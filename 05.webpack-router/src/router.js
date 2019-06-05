import VueRouter from 'vue-router'
import Home from './components/tabbar/HomeContainer.vue'
import Member from'./components/tabbar/MemberContainer.vue'
import Search from './components/tabbar/SearchContainer.vue'
import Shopcart from  './components/tabbar/ShopcartContainer.vue'
import Newslist from  './components/news/Newslist.vue'
import Newsinfo from  './components/news/Newsinfo.vue'
import Photolist from './components/photos/Photolist.vue'

const router = new VueRouter({
    routes:[{path:'/',redirect:'/home'},{
        path:"/home",component:Home
    },{
        path:"/member",component:Member
    },{
        path:"/search",component:Search
    },{
        path:"/shopcart",component:Shopcart
    },{
        path:"/home/newslist",component:Newslist
    },{
        path:"/home/newsinfo/:id",component:Newsinfo
    },{
        path:'/home/photolist',component:Photolist
    }],  
    linkActiveClass:'mui-active'
})



export default router;