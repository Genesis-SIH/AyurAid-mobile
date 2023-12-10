


import axios from 'axios';
import { ApiHead } from '../../config';
import { UserToken } from '../../redux/store/useStore';

export const useAxios = () => {

    const token = UserToken()

    const instance = axios.create({
        baseURL: ApiHead,
        headers: {
            'Content-Type': 'application/json',
            'Token': token || '',
        },
    });

    return instance;
};
