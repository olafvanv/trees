import Vue from 'vue'
import Router from 'vue-router'

import Donation from '@/components/Donation';

Vue.use(Router);

const routes = [
  {path: '/donation', name:'donation', component: Donation}
]

export default new Router({
  routes: routes
});