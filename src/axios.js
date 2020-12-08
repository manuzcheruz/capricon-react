import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api-v1/',
    // parameter to limit the results to the first 10 items
    // params: {
    //     limit: 10
    // }
});

export default instance;