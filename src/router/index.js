import Vue from 'vue'
import Router from 'vue-router'

import Donation from '@/components/Donation';
import Park from '@/components/Park';

Vue.use(Router);

const routes = [
  {path: '/donation', name:'donation', component: Donation},
  {path: '/park/:id', name:'park', component: Park}
]

export default new Router({
  routes: routes
});