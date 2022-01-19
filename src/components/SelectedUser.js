import { Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function SelectedUser() {
   const navigateTo = useNavigate();
   const state = useSelector((state) => state);
   const { id } = useParams();

   return (
      <div>
         <Button
            onClick={() => {
               navigateTo('/');
            }}
            type="primary"
            size='large'
         >
            List of Users
         </Button>
         {state.users
            .filter((i) => i.id == id)
            .map((data, k) => (
               <div key={k}>
                  <h2>ID : {data.id}</h2>
                  <h2>User Name : {data.name}</h2>
                  <h2>Phone : {data.phone}</h2>
                  <h2>Email : {data.email}</h2>
               </div>
            ))}
      </div>
   );
}

export default SelectedUser;
