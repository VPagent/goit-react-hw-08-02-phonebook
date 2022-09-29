import Contacts from "components/Contacts"
import Form from "components/Form"
import Section from "components/Section"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const ContactsPage = () => {
  const navigate = useNavigate()
  const isLogged = useSelector(state => state.auth.isLoggedIn)
  console.log(isLogged)
  useEffect(() =>{
    if(!isLogged){
      navigate("/", {replace: true})
      return 
    }
  }, [isLogged, navigate])
  
    return(
        <>
        <Section title="Phonebook">
          <Form></Form>
        </Section>
        <Section title="Contacts">
          <Contacts/>
        </Section>
        </>
    )
}

export default ContactsPage