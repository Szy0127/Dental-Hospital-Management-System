import React, { useState } from 'react'
<<<<<<< HEAD
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



export default function LoginBox() {
  
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
=======
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Loginbox.css'


export default function LoginBox() {
    const [Register,setRegister] = useState(true);
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      // usrService.login(values);
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
    };
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
<<<<<<< HEAD
        <Form.Item label="indentity" name="Identity">
          <Radio.Group>
=======
        <Form.Item label="identity" name="identity">
          <Radio.Group
          defaultValue="patient"
          onChange={(e)=>{
            console.log(e);
            if(e.target.value === "patient"){
              setRegister(true);
            }
            else{
              setRegister(false);
            } 
          }}>
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
            <Radio.Button value="patient">Patient</Radio.Button>
            <Radio.Button value="doctor">Doctor</Radio.Button>
            <Radio.Button value="administer">Administer</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
<<<<<<< HEAD
          Or <a>register now!</a>
=======
          {Register?<Link to="/register">register now!</Link>:<></>}
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
        </Form.Item>
      </Form>
    )
  }