import axios from 'axios';

const instance = axios.create({
    baseURL: 'https:// ecomm-site-one-api.vercel.app', // Set your base URL
    headers: {
        'Authorization': 'Bearer your_access_token', // Set common headers if needed
        'Content-Type': 'application/json',
    },
});

export default instance;
