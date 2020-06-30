import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/Category.vue")
const ShoppingCart = () => import("../views/shoppingcart/ShoppingCart.vue")
const Profile = () => import("../views/profile/Profile.vue")

const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: ShoppingCart
  },
  {
    path: '/profile',
    component: Profile
  }
]

export default new Router({
  routes,
  mode: "history"
})
