import axios from 'axios'


export const setHeaders = (token) =>{
    if(token){
        axios.defaults.headers.common['Authorization'] = token
    }else{
        delete axios.defaults.headers.common['Authorization']
    }
}