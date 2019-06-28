import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld';
import Donation from '@/components/Donation';

Vue.use(Router);

const routes = [
  {path: '/home', name: 'Home', component: HelloWorld},
  {path: '/donation', name:'donation', component: Donation}
]

export default new Router({
  routes: routes
});