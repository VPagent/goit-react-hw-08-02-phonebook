import { createAction, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"

import { deleteContact, getContacts, postContacts, userLogIn, userLogOut, userRegistration, getCurrentUser } from "services/API"
import  tokenApi  from './selectors'


// ACTIONS

export const changeFilter = createAction('filter')

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (body, {dispatch}) => {
        try{
        const contact = await postContacts(body)
        return contact
        }catch(error){console.log(error.message)}
    }
)
export const getAllContacts = createAsyncThunk(
    "contacts/getContacts",
    async () => {
        try{
        const contacts = await getContacts()
        return contacts
        }catch(error){console.log(error.message)}
    }
) 
export const deleteContacts = createAsyncThunk(
    "contacts/deleteContact",
    async (id, {dispatch}) => {
        try{
            const contact = await deleteContact(id)
            return contact
        }catch(error){console.log(error.message)}
    }
)

//USERS

export const register = createAsyncThunk(
    "auth/register",
    async (credential) => {
        try{
            const response = await userRegistration(credential) 
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
        } catch(error){console.log("filed")}
    }
)