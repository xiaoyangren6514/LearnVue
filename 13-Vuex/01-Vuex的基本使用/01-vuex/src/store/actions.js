export default{
    aUpdateInfo(context, payload) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('updateInfo')
                resolve()
            }, 1000);
        })
    }
}