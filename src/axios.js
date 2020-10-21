import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://capricon.herokuapp.com/',
    // parameter to limit the results to the first 10 items
    // params: {
    //     limit: 10
    // }
});

export default instance;