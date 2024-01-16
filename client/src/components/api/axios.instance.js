import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7000', // Set your base URL
    headers: {
        'Authorization': 'Bearer your_access_token', // Set common headers if needed
        'Content-Type': 'application/json',
    },
});

export default instance;
