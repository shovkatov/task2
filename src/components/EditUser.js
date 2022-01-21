import { Button, Form, Input, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addedUser, getSelectedUser, updateUser } from '../redux/actionUsers';

const EditUser = () => {
   const navigateTo = useNavigate();
   const { id } = useParams();
   const dispatch = useDispatch();
   const { userEdit } = useSelector((state) => state);

   const [user, setuser] = useState({
      name: '',
      phone: '',
      email: '',
   });

   useEffect(() => {
      dispatch(getSelectedUser(id));
   }, []);

   useEffect(() => {
      if (userEdit) {
         setuser({ ...userEdit });
      }
   }, [userEdit]);

   const openNotification = (type) => {
      if (type == 'error') {
         notification[type]({
            message: 'Failed',
         });
      } else {
         notification[type]({
            message: 'Succes',
         });
      }
   };

   const onFinish = () => {
      if (!name || !phone || !email) {
         openNotification('error');
         return false;
      } else {
         dispatch(updateUser(user, id));
         resetForm();
         openNotification('success');
         setTimeout(() => {
            navigateTo('/home');
         }, 500);
      }
   };

   const inputToUser = (e) => {
      let { name, value } = e.target;
      setuser({ ...user, [name]: value });
   };

   const resetForm = () => {
      setuser({});
   };

   const { name, phone, email } = user;

   return (
      <div className="addUser">
         <Button
            onClick={() => {
               navigateTo('/');
            }}
            type="primary"
            size="large"
         >
            List of Users
         </Button>
         <h2>Edit User</h2>
         <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
         >
            <Form.Item label="Name" rules={[{ required: true, message: 'Please input your username!' }]}>
               <Input value={name} name="name" onChange={inputToUser} />
            </Form.Item>

            <Form.Item label="Phone" rules={[{ required: true, message: 'Please input your username!' }]}>
               <Input type={'number'} name="phone" value={phone} onChange={inputToUser} />
            </Form.Item>

            <Form.Item label="EMail" rules={[{ required: true, message: 'Please input your email!' }]}>
               <Input type={'email'} name="email" value={email} onChange={inputToUser} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
               <Button type="primary" htmlType="submit">
                  OK
               </Button>
               <Button type="primary" htmlType="reset" onClick={resetForm}>
                  CLEAR
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default EditUser;
