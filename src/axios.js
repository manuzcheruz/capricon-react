import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://capricon.herokuapp.com/rest/'
});

export default instance;