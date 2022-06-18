import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Radio, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '../../services/UsrService';
import './Loginbox.css'


export default function LoginBox() {
  const [Register, setRegister] = useState(true);
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    login(values, (data) => {
      if (data.success) {
        message.success(data.msg);
        localStorage.setItem("identity",values["identity"]);
        localStorage.setItem("ID",data.data.id);
        console.log("in");
        console.log(data);
        navigate('/home');
      }
      else {
        message.error(data.msg);
      }
    });

  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item label="identity" name="identity">
        <Radio.Group
          onChange={(e) => {
            console.log(e);
            if (e.target.value === "patient") {
              setRegister(true);
            }
            else {
              setRegister(false);
            }
          }}>
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {Register ? <Link to="/register">register now!</Link> : <></>}
      </Form.Item>
    </Form>
  )
}
