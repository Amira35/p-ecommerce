import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/products/:category/:title' , 
    name : 'products-category' , 
    component :()=> import ('../views/ProductsCategory.vue')
  },
  {
    path : '/products/product-details/:productId',
    name : 'product-details' ,
    component : ()=> import ('../views/ProductDetials.vue')
  },
  {
    path : '/products/cart-details',
    name : 'cart-details' ,
    component : ()=> import ('../views/CartDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
