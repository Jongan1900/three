import Vue from 'vue';
import Router from 'vue-router';
// import Home from './components/tabber/Home.vue';
// import Voice from './components/tabber/Voiceroom.vue'
// import Mine from './components/tabber/Mine.vue'
// import Discover from './components/tabber/Discover.vue'
// import Information from './components/tabber/Information.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./components/tabber/Home.vue')
    },
    {
      path: '/home',
      name: 'home2',
      component: () => import('./components/tabber/Home.vue')
    },
    {
      path: '/voice',
      name: 'voice',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./components/tabber/Voiceroom.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./components/tabber/Mine.vue'),

    },

    {
      path: '/mine/mydata',
      name: 'mydata',
      component: () => import('./components/Mine/MyData/MyData.vue')
    },
    {
      path: '/mine/shopmall',
      name: 'shopmall',
      component: () => import('./components/Mine/ShopMall/ShopMall.vue'),
      children: [
        {path:'',redirect:'ring',component:()=>import('./components/Mine/ShopMall/Ring.vue')},
        {path:'product',name:"product",component:()=>import('./components/Mine/ShopMall/Product.vue')},
        {path:'propi',name:"propi",component:()=>import('./components/Mine/ShopMall/Propi.vue')},
        {path:'ring',name:"ring",component:()=>import('./components/Mine/ShopMall/Ring.vue')},
        
      ]
    },
    {
      path: '/discover',
      name: 'discover',
      // component: Discover,
      component: () => import('./components/tabber/Discover.vue'),

    },
    {
      path: '/information',
      name: 'information',
      component: () => import('./components/tabber/Information.vue')
    },
    {
      path: '/discover',
      name: 'friendsg',
      // component: Discover,
      component: () => import('./components/Discover/FriendsG.vue'),
      children: [{
          path: 'friendsg',
          name: 'pyq',
          component: () => import('./components/Discover/FriendsList.vue')
        },
        {
          path: 'gc',
          name: 'gc',
          component: () => import('./components/Discover/PlaZa.vue'),
          children: [{
              path: '',
              name: 'dynamic',
              component: () => import('./components/Discover/Dynamic/Dynamic.vue')
            },
            {
              path: 'dynamic',
              name: 'dynamic',
              component: () => import('./components/Discover/Dynamic/Dynamic.vue')
            },
            {
              path: 'theme',
              name: 'theme',
              component: () => import('./components/Discover/Dynamic/Theme.vue')
            }
          ]
        }
      ]
    },
  ],
  linkActiveClass: 'cg-active'
})