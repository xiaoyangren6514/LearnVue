export default {
    state: {
        name: '凤凰于飞'
    },
    actions: {
        aUpdateName(context) {
            setTimeout(() => {
                context.commit('updateName', '旺财')
            }, 1000);
        }
    },
    mutations: {
        updateName(state, payload) {
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