import axios from 'axios';


export const AxiosInterceptor = () => {
    axios.interceptors.request.use((request) => {
        console.log('starting request')
        return request;
    })
}