import RegistrationForm from "components/RegistrationForm"
import ContactsPage from "pages/ContactsPage/ContactsPage"
import HomePage from "pages/HomePage/HomePage"
import LoginPage from "pages/LoginPage"
import { Route, Routes } from "react-router-dom"




const ClientRoutes = () => {

    return(

        <Routes>
            <Route path ="/" element={<HomePage />}/>
            <Route path="/register" element={<RegistrationForm />}/>   
            <Route path="/login" element={<LoginPage />}/>   
            <Route path="/contacts" element={<ContactsPage />}/>

        </Routes>
    )
}


export default ClientRoutes