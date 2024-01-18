


import axios from 'axios';
import { ApiHead,ApiHeadAi } from '../../config';
import { Language, UserToken } from '../../redux/store/useStore';



export const useAxios = (apiType) => {

    const token = UserToken()
    const language = Language()


    const instance = axios.create({
        baseURL: apiType ? ApiHead : ApiHeadAi,
        headers: {
            'Content-Type': 'application/json',
            'Lang': language || 'en',
            'Token': token || '',
        },
    });

    return instance;
};
