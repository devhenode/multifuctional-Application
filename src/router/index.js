import {  createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import AddCart from '../components/AddCart.vue'

const routes = [
  { path: '/home', name: 'Home', component: Home},
  { path: '/about', name: 'About', component: About},
  { path: '/addcart', component: AddCart}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router