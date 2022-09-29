
// import Form from 'components/Form';
// import Section from 'components/Section';
// import Contacts from 'components/Contacts';
// import  ContactsPage  from 'pages/ContactsPage/ContactsPage';
import { BrowserRouter } from "react-router-dom";
// import HomePage from 'pages/HomePage/HomePage';
import ClientRoutes from "./ClientRouters/ClientRouters";
import Header from "./Header";
// import { Provider } from 'react-redux';



export function App() {
  
  return (
    <>
    <BrowserRouter basename="goit-react-hw-08-02-phonebook">
      <Header />
      <ClientRoutes />
    </BrowserRouter>
    </>
    
  );
}

