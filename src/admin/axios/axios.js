import axios from 'axios';
const BASE_URL = 'http://18.134.208.237:5000/api';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    Accept: "application/json"
});