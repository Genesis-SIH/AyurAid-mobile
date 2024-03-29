import { createSlice } from '@reduxjs/toolkit'
import { config } from '../../config';

const initialState = { userToken: null, loggedIn: false,user:null,language:'en',firstTimeLogin:true}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userToken = action.payload.userToken
            state.loggedIn = action.payload.loggedIn
            state.user = action.payload.user
        },
        setUserLogOutState: (state) => {
            state.userToken = null
            state.loggedIn = false
            state.user = null
            state.firstTimeLogin = false
            // state.language = 'en'
        },
        setLanguage: (state, action) => {
            const langIndex = config.languages.findIndex((lang)=>lang.code === action.payload)
            if(langIndex !== -1){
                state.language = action.payload
            }
        }
    }
});

export const { setActiveUser, setUserLogOutState,setLanguage } = userSlice.actions
export const selectUserToken = (state) => state.user.userToken
export const selectFirstTimeLogin = (state) => state.user.firstTimeLogin
export const selectLoggedIN = (state) => state.user.loggedIn
export const selectUser = (state) => state.user.user
export const selectLanguage = (state) => state.user.language
export default userSlice.reducer