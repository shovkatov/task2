import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import LogIn from './LogIn';

const PtotectRoutes = () => {
    const isAuths = useSelector((state) => state.isAuth);
    return isAuths?<Outlet/>:<LogIn/>
};

export default PtotectRoutes;
