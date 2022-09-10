import axios from 'axios';
import  store  from '../Redux/store';
import { setLoader } from '../Redux/Actions/loaderActions';
export const axiosinstance = axios.create({
    baseURL: 'https://fakestoreapi.com', 
});


// Add a request interceptor
axiosinstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.dispatch(setLoader(true));
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosinstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(setLoader(false));
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });







export default axiosinstance;
