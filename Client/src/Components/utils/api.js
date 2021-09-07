import Axios from 'axios'
import {host} from './constants'

export default Axios.create({
    baseURL : host,
    headers  : {
        Authorization :( localStorage.jwtToken )  ?   localStorage.jwtToken : ""
    }
})