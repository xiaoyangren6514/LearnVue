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
    meta: {
      title: "首页"
    },
    children: [
      {
        path: "",
        redirect: "waitreceive"
      },
      {
        path: "waitreceive",
        component: WaitReceive,
        meta: {
          title: "待收货"
        },
      },
      {
        path: "waitevaluate",
        component: WaitEvaluate
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: "关于"
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: "单干"
    },
  }
]
const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置钩子
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

// 后置狗子
router.afterEach((to,from)=>{
  console.log("after")
})

export default router