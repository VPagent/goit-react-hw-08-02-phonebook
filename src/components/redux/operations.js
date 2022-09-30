import { createAction, createAsyncThunk} from "@reduxjs/toolkit"

import { deleteContact, getContacts, postContacts } from "services/API"



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
            await deleteContact(id)
            dispatch(getAllContacts())   
        }catch(error){console.log(error.message)}
    }
)

//USERS

