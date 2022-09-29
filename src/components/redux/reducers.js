import { createReducer, createSlice } from "@reduxjs/toolkit"
import { changeFilter, login, register } from "./operations"
import { combineReducers } from "redux"
import {addContact, getAllContacts, deleteContacts, currentUser, logOut } from './operations'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'



// Reducers
export const itemsReducer = createReducer([], {
    // [getAllContacts] : (state, _) => state,
    [getAllContacts.fulfilled] : (_, action) => action.payload,
    [addContact.fulfilled] : (state, action) => [...state, action.payload],
    [deleteContacts.fulfilled] : (state, action) => { return state.filter(elem => elem.id !== action.payload.id)}
})

export const isLoadingReducer = createReducer(false, {
    [getAllContacts.pending] : state => state=true,
    [getAllContacts.fulfilled] : state => state=false,
    [getAllContacts.rejected] : state => state=false,
    [addContact.pending] : state => state=true,
    [addContact.fulfilled] : state => state=false,
    [addContact.rejected] : state => state=false,
    [deleteContacts.pending] : state => state=true,
    [deleteContacts.fulfilled] : state => state=false,
    [deleteContacts.rejected] : state => state=false,
})

export const filterReducer = createReducer("", {
    [changeFilter] : (_, action) => action.payload
})

//USERS
const initialState = {
    user: {name: null, email:  null},
    token: null,
    isLoggedIn: false,
    userLoading: false
}
export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    extraReducers: {
        [register.pending] : (state, _) => state.userLoading = true,
        [register.fulfilled]: (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.userLoading = false;
        },
        [login.fulfilled]: (state, {payload}) => {
            // console.log(payload)
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.userLoading = false;
        },
        [currentUser.fulfilled]: (state, {payload}) => {
            state.user = payload;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled] : (state, action) => {
            state.user = {name: null, email:  null};
            state.token = null;
            state.isLoggedIn = false;
        }
    }
})



const persistConfigUser = {
  key: "userAuth",
  storage,
  whitelist: ["token"],
}
 const persistedUserReducer = persistReducer(persistConfigUser, userSlice.reducer)

export const rootReducer = combineReducers({
    auth: persistedUserReducer,
    items: itemsReducer,
    filter: filterReducer,
    isLoading: isLoadingReducer,
    
})


