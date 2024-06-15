import axios from 'axios';
import { logout } from './shared/utils/auth';

const apiClient = axios.create({
    baseURL : 'http://localhost:5002/api',
    timeout : 1000
})

apiClient.interceptors.request.use((config) =>{
    const userDetail = localStorage.getItem('userDetail');
    if(userDetail){                                             //we are storing the userDetail in local storage of the browser while login
        const token = JSON.parse(userDetail).token;             //we are getting back the token from the userDetail from the local storage in every request
        config.headers.Authorization = `Bearer ${token}`;       //and we are sending the token with the request
    }
    return config;
},(err) =>{
    checkResponseCode(err);                                     //this I have added by myself       
    return Promise.reject(err);
})

//these are the public routes

export const login = async (data) => {
    try{
        return await apiClient.post('/auth/login', data) 
    }
    catch(exception){
        return {
            error : true,
            exception
        }
    }
}

export const register = async (data) => {
    try{
        return await apiClient.post('/auth/register', data) 
    }
    catch(exception){
        return {
            error : true,
            exception
        }
    }
}

//secure routes
const checkResponseCode = (exception)=>{
    const responseCode = exception?.response?.status;
    if(responseCode){
        (responseCode === 401 || responseCode === 403) && logout();
    }

} 