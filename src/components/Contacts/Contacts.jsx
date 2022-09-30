
import s from 'components/Contacts/Contacts.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../redux/AuthUser/userOperations'
import { ColorRing } from 'react-loader-spinner'
import { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import {MdDeleteForever} from 'react-icons/md'
import {ImPhone} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import { changeFilter, deleteContacts, getAllContacts } from 'components/redux/operations'



function Contacts (){
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const contacts = useSelector(state => state.items)
    const isLoading = useSelector(state => state.isLoading)
    const options = filter
    ?  contacts.filter(user => user.name.includes(filter))
    : contacts;
    const token = useSelector(state => state.auth.token)

    useEffect(()=> {
      if(!token){
        return
      }
        dispatch(currentUser())
        dispatch(getAllContacts())
    }, [dispatch, token])

    function handleChangeFilter(event) {
        const value = event.target.value.toLowerCase();
        dispatch(changeFilter(value))
    }
   
    if(!options){
        return
    }
    return(
        
        <>
         {isLoading && <ColorRing />}
        <label className={s.contactForm}>
            Find contacts by name 
            <input className={s.contactInput} type="text" name="filter" onChange={handleChangeFilter} />
        </label>
        {options.length > 0 && <ListGroup className={s.list} variant="flush">
            {options.map(({id, name, number}) => (
                <ListGroup.Item className={s.item} key={name}  >
                    <p  className={s.text}><FaUser /> <b>{name}</b></p>
                    <p className={s.text}><ImPhone /> <b>{number}</b></p>
                    <Button variant="primary" type="button"id={id} name={name} onClick={() => dispatch(deleteContacts(id))} ><MdDeleteForever size={20}/> DELETE</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>}
        </>
    
  );
}

export default Contacts
