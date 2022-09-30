import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../RegistrationForm/registrationForm.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'components/redux/AuthUser/userOperations';





const RegistrationForm = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSabmit = async (event) => {
    event.preventDefault()
    const credentials = {name, email, password}
    try{
    await dispatch(register(credentials)).unwrap()
    return
    } catch {console.log("error")}
  }
  const handleChange = (event) => {
    switch (event.target.name){
      case "name":
      setName(event.target.value)
      return;
      case "email":
        setEmail(event.target.value)
        return;
      case "password":
        setPassword(event.target.value)
        return;
      default: console.log("error")
    }
  }
  return (
      <section className={s.section}>
        <h2 className={s.registerTitle}>Enter your details to register</h2>
    <Form className={s.form} onSubmit={handleSabmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" name="name" placeholder="Name" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"name="password" placeholder="Password" onChange={handleChange}  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </section>
  );
};

export default RegistrationForm
