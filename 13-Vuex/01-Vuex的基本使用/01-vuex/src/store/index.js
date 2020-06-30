import Vue from "vue"
import Vuex from "vuex"
import { INCREMENT } from './mutation.type'

Vue.use(Vuex)

const moduleA = {
    state: {
        name: '凤凰于飞'
    },
    actions: {
        aUpdateName(context){
            setTimeout(() => {
                context.commit('updateName','旺财')
            }, 1000);
        }
    },
    mutations: {
        updateName(state,payload){
            state.name = payload
        }
    },
    getters: {
        fullName(state) {
            return state.name + '王昭君'
        },
        fullName2(state, getters) {
            return getters.fullName + ' 礼拜'
        },
        fullName3(state, getters, rootState) {
            return getters.fullName2 + rootState.counter
        }
    }
}

const store = new Vuex.Store({
    state: {
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
    },
    mutations: {
        [INCREMENT](state) {
            state.counter++
        },
        decreament(state) {
            state.counter--
        },
        increamentCount(state, count) {

            state.counter += count
        },
        addStudent(state, student) {
            state.students.push(student)
        },
        updateInfo(state) {
            // 动态增加属性  响应式
            // state.info['address'] = 'bj'
            Vue.set(state.info, 'address', 'bj')
            // 动态删除属性
            // delete stata.age
            Vue.delete(state.info, 'age')
        }
    },
    getters: {
        ageMore40(state) {
            return state.students.filter(s => s.age > 40);
        },
        ageMore40Length(state, getters) {
            return getters.ageMore40.length
        },
        getStudentById(state) {
            // return function(id){
            //     return state.students.filter(s=>s.id==id)
            // }
            return id => {
                return state.students.filter(s => s.id == id)
            }
        }
    },
    actions: {
        aUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateInfo')
                    resolve()
                }, 1000);
            })
        }
    },
    modules: {
        a: moduleA
    }
})

export default store