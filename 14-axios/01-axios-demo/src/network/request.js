import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 拦截器
    instance.interceptors.request.use(config => {
        console.log(config)
        return config
    }, err => {
        console.log(err)
    })
    instance.interceptors.response.use(res => {
        console.log('interceptors response ',res)
        return res.data
    }, error => {
        console.log('interceptors response ',error)
    })
    return instance(config)
}

// 方案二
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseURL: '',
//             timeout: 5000
//         })
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }

// 方案一
// export function request(config) {
//     const instance = axios.create({
//         baseURL: '',
//         timeout: 5000
//     })
//     instance(config).then(res => {
//         config.success(res);
//     }).catch(error => {
//         config.failure(error);
//     })
// }