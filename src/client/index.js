import ENDPOINTS from './endpoints';
import { HttpClient, unauthorizedAxios } from './axios';

const Client = {
    auth: {
        // login: (data) => HttpClient.post(ENDPOINTS.LOGIN, { ...data }),
    },
    news: {
        all: () => HttpClient.get(ENDPOINTS.GET_ARTICLES),
        single: (id) => HttpClient.get(`${ENDPOINTS.GET_ARTICLES}/${id}`)
    },
    crypto: {
        all: () => HttpClient.get(ENDPOINTS.CRYPTO_DATA)
    }
}


export default Client;
