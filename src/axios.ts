import axios from "axios";

export const http = axios.create({
    baseURL: "http://localhost:8080",
})

http.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if(token){
        config.headers['Authorization'] =  `Bearer ${token}`;
    }
    return config;

})


http.interceptors.response.use(config => config,(error) => {
    if(error.response.status == 403){
        localStorage.removeItem('token');
        window.location.href = '/';
    }
})