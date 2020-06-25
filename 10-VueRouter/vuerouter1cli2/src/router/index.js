import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "../components/home"
import About from "../components/about"

// 1. 通过Vue.use(插件),安装插件
Vue.use(Router)

// 2. 创建routes对象
const routes = [
  {
    path: "",
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
