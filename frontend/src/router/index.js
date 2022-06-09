import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailProduct.vue')
  },
  {
    path : '/keranjang',
    name : 'keranjang',
    component :() => import('../views/CartView.vue'),
    meta: {
      reload: true,
    },
  },
  {
    path: '/pesanan-sukses',
    name: 'pesananSukses',
    component: () => import(/* webpackChunkName: "about" */ '../views/Check-Out.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
