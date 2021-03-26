import axios from 'axios';

const baseURLAPI = 'http://localhost:1337/'

const authUserAPI = (data) => {
    return axios.post('auth/local', data, {
        baseURL: baseURLAPI,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default authUserAPI
