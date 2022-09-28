import  axios  from "axios";

const contactsApi = axios.create({
    baseURL: 'https://6331b5bccff0e7bf70f4cdfb.mockapi.io/',
});

export const getContacts = async () => {
    const response = await contactsApi.get("contacts")
    return response.data
}

export const postContacts = async (body) => {
    const response = await contactsApi.post("contacts", body)
    return response.data
    
}

export const deleteContact = async (id) => {
    const response = await contactsApi.delete(`contacts/${id}`)
    return response.data 
    
}
