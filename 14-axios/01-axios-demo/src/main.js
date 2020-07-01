// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 基本使用
axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}).then(res => {
  console.log(res)
})

// get带参数
axios.get({
  url: 'http://123.207.32.32:8000/home/data?type=pop&page=1',
}).then(res => {
  console.log(res)
})

// get带参数
axios.get({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'pop',
    page: '1'
  }
}).then(res => {
  console.log(res)
}).catch(error => {
  console.log(error)
})

// 并发请求
axios.all([
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }),
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  })
]).then(results => {
  console.log('并发请求结束')
  console.log(results)
}).catch(error => {
  console.log('error:', error)
})

axios.all([
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }),
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  })
]).then(axios.spread((res1, res2) => {
  console.log(res2)
}))

// 解构
const obj = {
  name: '旺财',
  age: 1
}

const { name, age } = obj

const names = ['why', 'a', 'b']

const [name1, name2, name3] = name


// 配置信息
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000
axios({
  url: '/home/multidata'
}).then(res => {
  console.log('使用配置信息喽')
  console.log(res)
})


// 之前都是使用的全局axios，下面创建独立的axios实例
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})
instance1({
  url: '/home/multidata'
}).then(res => {
  console.log('使用axios实例1')
  console.log(res)
})

// 使用axios封装
// 方案一
import { request } from './network/request'
// Request({
//   url: '',
//   success: function (res) {

//   },
//   failure: function (error) {

//   }
// })

request({
  url: ''
}).then(res => {

}).catch(error => {

})