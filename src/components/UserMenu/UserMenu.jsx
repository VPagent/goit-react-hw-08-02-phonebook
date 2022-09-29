import {HiUserCircle} from 'react-icons/hi'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { PrimaryButton } from 'components/Buttons/PrimaryButton';
import { logOut } from 'components/redux/operations';


// const UserMenu = () => {
//  return(
//      <HiUserCircle size={60}/>
//  )
// }

const UserMenu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {name, email} = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <HiUserCircle  size={20}/> 
        {`   User Menu`}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body><HiUserCircle size={60}/><p>username: <b>{name}</b></p><p>email: <b>{email}</b></p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          <PrimaryButton onClickBth={handleLogOut}>Log Out</PrimaryButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default UserMenu