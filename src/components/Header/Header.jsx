// import { PrimaryButton } from 'components/Buttons/PrimaryButton';
// import { logOut } from 'components/redux/operations';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './header.module.scss';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import UserMenu from 'components/UserMenu/UserMenu';

const Header = () => {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logoWrapper}>
          <FaPhoneSquareAlt size={45} />
          <p className={s.logo}>Phonebook</p>
        </div>
        <nav>
          <NavLink to="/" className={getActiveClassName} end>
            Home
          </NavLink>
          {isLogged ? (
            <>
              <NavLink to="/contacts" className={getActiveClassName}>
                Contacts
              </NavLink>
              <UserMenu/>
              {/* <PrimaryButton onClickBth={handleLogOut}>Log Out</PrimaryButton> */}
            </>
          ) : (
            <>
              <NavLink to="/register" className={getActiveClassName}>             
                Register
              </NavLink>
              <NavLink to="/login" className={getActiveClassName}>               
                Login
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
