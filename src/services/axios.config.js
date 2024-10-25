import axios from 'axios'
export const https = axios.create({
    baseURL: ''
})

https.interceptors.request.use((config)=>{
//đây sẽ là nơi giúp chỉnh sửa thê hoặc đổi dữ liệu trước khi gửi lên BE
// config.headers={
//     Authorization: 'Bearer'+'huhu12sasd'
// }
return{
    ...config,
    headers:{
        Authorization:'Bearer'+'huhu12sasd'
    }
}

},
(error)=>{
return Promise.reject(error)
})