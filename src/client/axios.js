import axios from 'axios';
import Cookies from 'js-cookie';
import qs from 'qs'
import _ from 'lodash'


const Axios = axios.create({
    // baseURL: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_LOCAL_URL : process.env.REACT_APP_PRODUCTION_BASE_URL,
    baseURL: 'https://oak-api.vercel.app/api/v1/',
    timeout: 5000000,
    headers: {
        'Content-Type': 'application/json',
    },
});
Axios.interceptors.request.use((config) => {
    const token = Cookies.get("OAK_TOKEN");
    config.headers = {
        ...config.headers,
        Authorization: token ? `Bearer ${token}` : '',
    };
    return config;
});

Axios.interceptors.response.use(
    (response) => response,
    (error) => {

        if (
            (error.response && error.response.status === 401)
        ) {

        }
        return Promise.reject(error);
    }
);


const filteredParams = (params) => _.pickBy(params, _.identity)

export class HttpClient {
    static async get(url, params) {
        const response = await Axios.get(url,
            {
                params: filteredParams(params),
            },
            {
                paramsSerializer: function (params) {
                    return qs.stringify(params)
                },
            }

        );
        return response.data;
    }

    static async post(url, data) {
        const response = await Axios.post(url, data);
        return response.data;
    }

    static async put(url, data) {
        const response = await Axios.put(url, data);
        return response.data;
    }

    static async delete(url) {
        const response = await Axios.delete(url);
        return response.data;
    }
}
