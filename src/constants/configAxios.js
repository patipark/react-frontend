import axios from 'axios';

const baseURLAPI = 'http://localhost:1337/'

export default axios.create({
    baseURL: baseURLAPI,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjE2NzY3ODEzLCJleHAiOjE2MTkzNTk4MTN9.pXJeE_KRCKvkOzZHZXGdF9BYVKk-vBIw1o7EhPFa5Xg'
    }
})