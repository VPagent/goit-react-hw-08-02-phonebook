import RegistrationForm from "components/RegistrationForm"
import ContactsPage from "pages/ContactsPage/ContactsPage"
import HomePage from "pages/HomePage/HomePage"
import LoginPage from "pages/LoginPage"
import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import PablickRoute from "./PublickRoute"



const ClientRoutes = () => {

    return(

        <Routes>
            <Route path ="/" element={<HomePage />}/>
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/login" element={<LoginPage />}/> 
                <Route path="/register" element={<RegistrationForm />}/> 
            </Route>
            <Route path="/" element={<PablickRoute />}>
                <Route path="/contacts" element={<ContactsPage />}/>
            </Route>
        </Routes>
    )
}


export default ClientRoutes