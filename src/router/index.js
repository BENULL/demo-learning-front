import Vue from 'vue'
import Router from 'vue-router'
import Prices from '@/pages/prices/Prices'
import Sales from '@/pages/sales/Sales'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/prices',
    name: 'Prices',
    component: Prices
  }, {
    path: '/sales',
    name: 'Sales',
    component: Sales
  }]
})
