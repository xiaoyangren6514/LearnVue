import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Home from "../components/home"
// import About from "../components/about"

// 1. 通过Vue.use(插件),安装插件
Vue.use(Router)

// 懒加载
const Home = () => import("../components/home")
const About = () => import("../components/about")
const WaitReceive = () => import("../components/WaitReceive")
const WaitEvaluate = () => import("../components/WaitEvaluate")
const Profile = () => import("../components/Profile")

// 2. 创建routes对象
const routes = [
  {
    path: "",
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: "",
        redirect: "waitreceive"
      },
      {
        path: "waitreceive",
        component: WaitReceive
      },
      {
        path: "waitevaluate",
        component: WaitEvaluate
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path:'/profile',
    component: Profile
  }
]
export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
