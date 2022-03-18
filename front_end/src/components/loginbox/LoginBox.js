import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Loginbox.css'


export default function LoginBox() {
  
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item label="indentity" name="Identity">
          <Radio.Group>
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
          Or <a>register now!</a>
        </Form.Item>
      </Form>
    )
  }