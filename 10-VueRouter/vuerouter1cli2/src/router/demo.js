import VueRouter from "vue-router"
import Vue from "vue"

// 1. 通过Vue.use(插件),安装插件
Vue.use(VueRouter)

// 2. 创建路由对象
const routes = [

]
const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes
})

// 3. 将router对象传入Vue示例中
export default router