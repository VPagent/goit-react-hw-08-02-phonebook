import {nanoid }from 'nanoid'
import s from 'components/Contacts/Contacts.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, deleteContacts } from '../redux/operations'
import { ColorRing } from 'react-loader-spinner'



function Contacts (){
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const contacts = useSelector(state => state.items)
    const isLoading = useSelector(state => state.isLoading)
    const options = filter
    ?  contacts.filter(user => user.name.includes(filter))
    : contacts;

    function handleDelete(event) {
        const userId = event.target.id
        dispatch(deleteContacts(userId))
    }
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
        <ul className={s.contactList}>
            {options.map(({id, name, phone}) => (
                <li key={id} className={s.contactItem} onClick={handleDelete}>
                    <p>name: {name}<br/></p>
                    <p>tel: {phone}</p>
                    <button key={nanoid(2)} type="button"id={id} name={name} >Delete</button>
                </li>
            ))}
        </ul>
        </>
    )
}
export default Contacts
