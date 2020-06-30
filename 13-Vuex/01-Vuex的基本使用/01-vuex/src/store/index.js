import Vue from "vue"
import Vuex from "vuex"
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'


Vue.use(Vuex)

const state = {
    counter: 1000,
    students: [
        { id: 1, name: '旺财', age: 12 },
        { id: 2, name: '小强', age: 31 },
        { id: 3, name: '大明', age: 45 },
        { id: 4, name: '狗蛋', age: 78 }
    ],
    info: {
        name: 'keko'
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        a: moduleA
    }
})

export default store