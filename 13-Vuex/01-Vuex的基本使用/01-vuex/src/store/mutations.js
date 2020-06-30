import { INCREMENT } from './mutation.type'

export default {
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
}