import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/tabber/Home.vue';
// import Voice from './components/tabber/Voiceroom.vue'
// import Mine from './components/tabber/Mine.vue'
// import Discover from './components/tabber/Discover.vue'
import Information from './components/tabber/Information.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('./components/tabber/Home.vue')
    },
    {
      path: '/home',
      name: 'home2',
      component:()=>import('./components/tabber/Home.vue')
    },
    {
      path: '/voice',
      name: 'voice',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( './components/tabber/Voiceroom.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: ()=>import('./components/tabber/Mine.vue'),
    },
    {
      path: '/discover',
      name: 'discover',
      // component: Discover,
      component:()=>import('./components/tabber/Discover.vue')
    },
    {
      path: '/information',
      name: 'information',
     component:()=>import('./components/tabber/Information.vue')
    },
  ],
});
