import { useQuery } from 'react-query';
import Client from '../index';

export const useGetAllArticlesQuery = () => {
    const { data, isLoading, error } = useQuery(['all_articles'], () => Client.news.all(), {
        onSuccess: (data) => {
            // console.log(data)
        },
        onError: (err) => {
            console.log(err)
        }

    })

    return {
        articles: data?.data ?? [],
        error: error ?? null,
        isLoading
    }
}

export const useGetSingleArticlesQuery = (id) => {
    const { data, isLoading, error } = useQuery(['single_article'], () => Client.news.single(id), {
        onSuccess: (data) => {
            // console.log(data)
        },
        onError: (err) => {
            console.log(err)
        }

    })

    return {
        article: data?.data ?? {},
        error: error ?? null,
        isLoading
    }
}
