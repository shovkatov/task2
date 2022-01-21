import { Button, Checkbox, Form, Input, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signUp } from '../redux/actionUsers';

const LogIn = () => {
   const dispatch = useDispatch();
   const navigateTo = useNavigate();
   const auths = useSelector((state) => state.auths);
   const [user, setUser] = useState({
      login: '',
      password: '',
   });
   useEffect(() => {
      dispatch(getAuth());
   }, []);

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

   function existAuth() {
      const x = auths.map((i) => {
         if (i.login == user.login && i.password == user.password) {
            return true;
         } else {
            return false;
         }
      });
      return x[0];
   }

   const onFinish = () => {
      if (!login || !password) {
         openNotification('error');
         return false;
      } else {
         if (existAuth()) {
            openNotification('success');
            setTimeout(() => {
               navigateTo('/home');
            }, 500);
         } else {
            openNotification('error');
         }
      }
   };

   const { login, password } = user;

   return (
      <div className="addUser">
         <h2>Log In</h2>
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

            <Form.Item label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
               <Input.Password name={password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
               <Button type="primary" htmlType="submit">
                  ENTER
               </Button>
               <Button onClick={() => navigateTo('/sign-up')}>SignUp</Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default LogIn;
