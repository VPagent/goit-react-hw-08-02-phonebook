
import s from 'components/Contacts/Contacts.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, currentUser, deleteContacts, getAllContacts } from '../redux/operations'
import { ColorRing } from 'react-loader-spinner'
import { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import {MdDeleteForever} from 'react-icons/md'
import {ImPhone} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import Button from 'react-bootstrap/Button';



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

    
    function handleDelete(event) {
        const userId = event.target.id
        dispatch(deleteContacts(userId))
    }
    function handleChangeFilter(event) {
        const value = event.target.value.toLowerCase();
        dispatch(changeFilter(value))
    }
    console.log(contacts)
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
            {options.map(({ name, number}) => (
                <ListGroup.Item className={s.item} key={name}  onClick={handleDelete}>
                    <p  className={s.text}><FaUser /> <b>{name}</b></p>
                    <p className={s.text}><ImPhone /> <b>{number}</b></p>
                    <Button variant="primary" type="button"id={name} name={name} ><MdDeleteForever size={20}/> DELETE</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>}
        </>
    
  );
}

// export default FlushExample;
//         </>
//     )
// }
export default Contacts


// {options.length > 0 && <ul className={s.contactList}>
//             {options.map(({ name, number}) => (
//                 <li key={name} className={s.contactItem} onClick={handleDelete}>
//                     <p>name: {name}<br/></p>
//                     <p>tel: {number}</p>
//                     <button  type="button"id={name} name={name} >Delete</button>
//                 </li>
//             ))}
//         </ul>}

// {/* <ListGroup variant="flush">
//       <ListGroup.Item>Cras justo odio</ListGroup.Item>
//       <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//       <ListGroup.Item>Morbi leo risus</ListGroup.Item>
//       <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
//     </ListGroup> */}