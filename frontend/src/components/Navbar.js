import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../redux/actions/userActions';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
      <div className="grid-container">
      <header className="row">
        <div>
        <Link to="/">
            <img src={Logo} alt = "logo" className='img-navbar'/>
        </Link>
          <Link className="brand" to="/">
            MEDI-Reminder
          </Link>
          <Link to="/" className='navbar-button'>Home</Link>
          <Link to="/about" className='navbar-button'>About</Link>
        </div>

          <div>
          {userInfo ? (
              <div className="dropdown">
                <Link to="#" className='navbar-button'>
                  {userInfo.name} <ArrowDropDownIcon/>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to={`/${userInfo._id}/profile`}>User Profile</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin" className='sgnin'>Sign In</Link>
            )}
        </div>
        </header>
        </div>
  )
}

export default Navbar