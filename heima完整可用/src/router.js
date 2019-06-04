
import VueRouter from 'vue-router'
import account from './main/Account.vue'
import goodlist from './main/GoodsList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'

const router = new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/account'
    },{
      path:'/account',
      component:account,
      
      children:[
        {path:'login',component:login},
        {path:'register',component:register}
      ]
    },{
      path:'/goodlist',
      component:goodlist,
    }
  ],
  linkActiveClass: 'myclass'
})

export default router