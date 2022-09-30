import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"



const  PablickRoute = () => {
    const token = useSelector(state => state.auth.token)

    return token ? <Outlet/> : <Navigate to="/login"/> 
    
}

export default PablickRoute