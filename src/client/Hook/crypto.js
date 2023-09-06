import { useQuery } from 'react-query';
import Client from '../index';

export const useGetCryptoQuery = () => {
    const { data, isLoading, error } = useQuery(['crypto_coins'], () => Client.crypto.all(), {
        onSuccess: (data) => {
            // console.log(data)
        },
        onError: (err) => {
            console.log(err)
        }

    })
    return {
        crypto: data?.data ?? [],
        error: error ?? null,
        isLoading
    }
}


