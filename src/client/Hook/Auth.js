import { useMutation, useQuery } from 'react-query';
import Cookies from 'js-cookie';
import Client from '..';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const navigate = useNavigate()
    const { mutate: loginUser, isLoading, error } = useMutation(Client.auth.login, {
        onSuccess: (data) => {
            console.log(data)
            if (data.error) {
                console.log(data.error.message)
            } else {
                console.log("load")
                Cookies.set("OAK_AUTH_TOKEN", data.data.token)
                navigate('/home')
            }
        },
        onError: (error) => {
            console.log(error)
        }
    })
    return {
        login: loginUser,
        loading: isLoading,
        error: error
    }
}

export const useUser = (req) => {
    const { data, isLoading, error } = useQuery(['active_user'], () => Client.auth.user(req), {
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (err) => {
            console.log(err)
        }
    })
    // console.log('---<<online user>>----', data)
    return {
        user: data?.data?.user ?? null
    }
}