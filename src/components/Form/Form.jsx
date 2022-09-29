import { useEffect, useState } from 'react';
import s from 'components/Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {addContact, getAllContacts} from '../redux/operations'
import Button from 'react-bootstrap/Button';




function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items)
  const isLogged = useSelector(state => state.auth.isLoggedIn)
  
  useEffect(()=> {
    dispatch(getAllContacts())
  }, [dispatch])

  function handleSubmit(event) {
    event.preventDefault();
    if(!isLogged){
      return alert("сначала зарегенься")
    }
    const obj = { "name": name,  "number": number };
    const inspect = contacts?.length > 0 && contacts.some(elem => elem.name === name);
    if (inspect) {
      return alert(`${name}is already in contacts`);
    }
    dispatch(addContact(obj))
    reset();
  }

  function handleChange(event) {
    const inputName = event.target.name;
    const value = event.target.value.toLowerCase();
    switch (inputName) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return alert('error');
    }
  }
  function reset() {
    setName('');
    setNumber('');
    
  }
      
  return (
    <form className={s.form} action="" onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Tel
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>

      {/* <button type="submit">Add contact</button> */}
      <Button type="submit"variant="primary"> Add contact  </Button>
    </form>
  );
}
export default Form;

