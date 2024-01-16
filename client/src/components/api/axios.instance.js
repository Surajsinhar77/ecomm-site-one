import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ecom-site-v7wd.onrender.coms', // Set your base URL
    headers: {
        'Authorization': 'Bearer your_access_token', // Set common headers if needed
        'Content-Type': 'application/json',
    },
});

export default instance;
