import { createSlice } from '@reduxjs/toolkit'

const initialState = { userToken: null, loggedIn: false,user:null}

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
        }
    }
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions
export const selectUserToken = (state) => state.user.userToken
export const selectLoggedIN = (state) => state.user.loggedIn
export const selectUser = (state) => state.user.user
export default userSlice.reducer