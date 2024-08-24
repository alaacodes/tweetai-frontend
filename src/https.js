import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // Your backend API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;