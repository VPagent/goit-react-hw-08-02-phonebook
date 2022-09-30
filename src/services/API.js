import  axios  from "axios";

const contactsApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
});

export const privateApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
})

export const getContacts = async () => {
    const response = await privateApi.get("contacts")
    return response.data
}

export const postContacts = async (body) => {
    const response = await privateApi.post("contacts", body)
    return response.data
    
}

export const deleteContact = async (id) => {
    const response = await privateApi.delete(`contacts/${id}`)
    return response.data 
    
}

//USERS
export const userRegistration = async (credential) => {
    const response = await contactsApi.post("users/signup", credential)
    return response.data
}

export const userLogIn = async (credential) => {
    const response = await contactsApi.post("users/login", credential)
    return response.data
}

export const userLogOut = async () => {
    await privateApi.post("users/logout")
}

export const getCurrentUser = async () => {
    const response = await privateApi.get("users/current")
    return response.data
}
