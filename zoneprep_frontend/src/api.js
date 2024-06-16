import axios from 'axios';
import { logout } from './shared/utils/auth';

const apiClient = axios.create({
    baseURL : 'http://localhost:5002/api',
    timeout : 1000
})

apiClient.interceptors.request.use((config) =>{
    const userDetail = localStorage.getItem('userDetails');
    if(userDetail){                                             //we are storing the userDetail in local storage of the browser while login
        const token = JSON.parse(userDetail).token;             //we are getting back the token from the userDetail from the local storage in every request
        config.headers.Authorization = `Bearer ${token}`;       //and we are sending the token with the request
    }
    return config;
},(err) =>{ 
    console.log(err);
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
export const sendFriendInvitation = async (data) => {
    try{
        return await apiClient.post('/friend-invitation/invite', data);
    } catch(exception){
        checkResponseCode(exception)
        return {
            error : true,
            exception
        }
    }
}


const checkResponseCode = (exception)=>{
    const responseCode = exception?.response?.status;
    if(responseCode){
        (responseCode === 401 || responseCode === 403) && logout();
    }

} 

export const acceptFriendInvitation = async (data) => {
    try{
        return await apiClient.post('/friend-invitation/accept', data);
    }catch(exception){
        checkResponseCode(exception)
        return{
            error : true,
            exception
        }
    }
}

export const rejectFriendInvitation = async (data) => {
    try{
        return await apiClient.post('/friend-invitation/reject', data);
    }catch(exception){
        checkResponseCode(exception)
        return{
            error : true,
            exception
        }
    }
}