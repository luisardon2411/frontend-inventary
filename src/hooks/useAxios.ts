/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { getValidationError } from '../utils/get-validation-error';

const useAxios = axios.create({
    baseURL: 'http://localhost:5000/api'
})


useAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    console.log('error:', getValidationError(error.code))
    return Promise.reject(error.response.data.message);
  });

useAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error)
        console.log('error: ', getValidationError(error.code))
        return Promise.reject(error);
    }
)



export default useAxios;