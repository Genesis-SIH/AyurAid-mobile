


import axios from 'axios';
import { ApiHead,ApiHeadAi } from '../../config';
import { UserToken } from '../../redux/store/useStore';



export const useAxios = (apiType) => {

    const token = UserToken()

    const instance = axios.create({
        baseURL: apiType ? ApiHead : ApiHeadAi,
        headers: {
            'Content-Type': 'application/json',
            'Lang': 'en',
            'Token': token || '',
        },
    });

    return instance;
};
