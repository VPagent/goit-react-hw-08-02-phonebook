import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import { getCurrentUser, userLogIn, userLogOut, userRegistration } from "services/API"
import  tokenApi  from '../selectors'


export const register = createAsyncThunk(
    "auth/register",
    async (credential) => {
        try{
            const response = await userRegistration(credential) 
            console.log(response)
            tokenApi.set(response.token)
            return response
        } catch(error){console.log(error.message)}
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (credential) => {
        try{
            const response = await userLogIn(credential)
            console.log(response.token)
            tokenApi.set(response.token)
            return response
        }catch(error){console.log(error.message)}
    }
)

export const logOut = createAsyncThunk(
    "auth/logout",
    async () => {
        try{
            await userLogOut()
            tokenApi.unset()
        }catch(error){console.log(error.message)}
    }
)

export const currentUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const persistToken = state.auth.token
        try{
            if(persistToken === null){
                return isRejectedWithValue()
            }
            tokenApi.set(persistToken)
            return await getCurrentUser()
        } catch(error){return thunkAPI.rejectWithValue()}
    }
)