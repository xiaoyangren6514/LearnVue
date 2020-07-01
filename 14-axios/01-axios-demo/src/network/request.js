import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: '',
        timeout: 5000
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