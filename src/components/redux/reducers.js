import { createReducer } from "@reduxjs/toolkit"
import { changeFilter } from "./operations"
import { combineReducers } from "redux"
import {addContact, getAllContacts, deleteContacts} from './operations'
const initialState =  []

// Reducers
export const itemsReducer = createReducer(initialState, {
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

export const rootReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    isLoading: isLoadingReducer
})

