import { Button, Checkbox, Form, Input, notification } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../redux/actionUsers';

const SignUp = () => {
   const dispatch = useDispatch();
   const navigateTo = useNavigate();
   const auths = useSelector((state) => state.auths);
   const [user, setUser] = useState({
      login: '',
      name: '',
      password: '',
   });

   function existAuth() {
      const x = auths.map((i) => {
         if (i.login === user.login) {
            return true;
         } else {
            return false;
         }
      });
      return x[0];
   }

   const openNotification = (type) => {
      if (type == 'error') {
         notification[type]({
            message: 'Failed',
         });
      } else if (type == 'warning') {
         notification[type]({
            message: `This login: "${user.login}" is Already exist`,
         });
      } else {
         notification[type]({
            message: 'Succes',
         });
      }
   };

   const onFinish = () => {
      if (!login || !password) {
         openNotification('error');
         return false;
      } else if (existAuth()) {
         openNotification('warning');
         return false;
      } else {
         dispatch(signUp(user));
         openNotification('success');
         setTimeout(() => {
            navigateTo('/home');
         }, 500);
         setUser({});
      }
   };

   const { login, password, name } = user;

   return (
      <div className="addUser">
         <h2>Sign Up</h2>
         <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
         >
            <Form.Item label="Login" rules={[{ required: true, message: 'Please input your login!' }]}>
               <Input name={login} onChange={(e) => setUser({ ...user, login: e.target.value })} />
            </Form.Item>

            <Form.Item label="Name" rules={[{ required: true, message: 'Please input your login!' }]}>
               <Input name={name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
            </Form.Item>

            <Form.Item label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
               <Input.Password name={password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
               <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
               <Button type="primary" htmlType="submit">
                  Submit
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default SignUp;
