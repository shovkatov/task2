import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthLogin } from '../redux/actionUsers';

const Header = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate()
   return (
      <div className="header">
         <h2>Test</h2>
         <div>
            <Link to={'/'}>
               <Button type="primary">Log In</Button>
            </Link>
            <Link to={'/sign-up'}>
               <Button type="primary">Sign Up</Button>
            </Link>
            <Button type="primary" onClick={() => ( dispatch(isAuthLogin(false))||(navigate('/')))}>
               Log Out
            </Button>
         </div>
      </div>
   );
};

export default Header;
