import axios from 'axios';
import router from '@/router';

const HOST = 'http://localhost:3000'
const API_URL = `${HOST}/fruit`

let client = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

client.interceptors.response.use(null, error => {
    let path = '/404';
    router.push(path);
    return Promise.reject(error);
});

export default client;