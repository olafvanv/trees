import Vue from 'vue'
import Router from 'vue-router'

import Donation from '@/components/Donation';
import ParkList from '@/components/ParkList';
import Stats from '@/components/Stats.vue'

Vue.use(Router);

const routes = [
  {path: '/donation', name:'donation', component: Donation},
  {path: '/parklist', name:'parklist', component: ParkList},
  {path: '/stats', name:'stats', component: Stats},
  {path: '', redirect: '/parklist'}
]

export default new Router({
  routes: routes
});