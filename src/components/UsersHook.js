import { Button, notification } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deletUser, getUser } from '../redux/actionUsers';

function UsersHook() {
   const navigateTo = useNavigate();
   const state = useSelector((state) => state.users);
   const dispatch = useDispatch();

   useEffect(() => {
      existUser();
   }, []);

   const existUser = () => {
      if (state.length === 0) {
         return dispatch(getUser());
      }
   };

   const delItem = (id) => {
      dispatch(deletUser(id));
      openNotification('success');
   };

   const openNotification = (type) => {
      notification[type]({
         message: 'User has been deleted',
      });
   };

   return (
      <div>
         <Button
            type="primary"
            size="large"
            onClick={() => {
               navigateTo('/add_user');
            }}
         >
            ADD USER
         </Button>
         {state.map((data, i) => (
            <div className="list" key={i}>
               <div>{data.name}</div>
               <div>{data.phone}</div>
               <div>{data.email}</div>
               <div>
                  <Button type="primary" ghost>
                     <Link to={`/user/${data.id}`}>VIEW</Link>
                  </Button>
                  <Link to={`/edit_user/${data.id}`}>
                     <Button type="primary">EDIT</Button>
                  </Link>
                  <Button onClick={() => delItem(data.id)} type="primary" danger>
                     DELETE
                  </Button>
               </div>
            </div>
         ))}
      </div>
   );
}

export default UsersHook;
