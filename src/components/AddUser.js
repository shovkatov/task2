import { Button, Form, Input, notification } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addedUser } from '../redux/actionUsers';

const AddUser = () => {
   const navigateTo = useNavigate();
   const dispatch = useDispatch();

   const [user, setuser] = useState({
      name: '',
      phone: '',
      email: '',
   });

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
         dispatch(addedUser(user));
         resetForm();
         openNotification('success');
         setTimeout(() => {
            navigateTo('/');
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
         <h2>Add User</h2>
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

            <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
               <Button type="primary" htmlType="submit">
                  ADD
               </Button>
               <Button type="primary" htmlType="reset" onClick={resetForm}>
                  RESET
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default AddUser;
