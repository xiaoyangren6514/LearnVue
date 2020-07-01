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