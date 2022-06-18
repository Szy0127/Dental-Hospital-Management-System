import React, { Component, createRef } from 'react'
import { Form, Input, InputNumber, Select } from 'antd'
import { LockOutlined} from '@ant-design/icons';
import FormItem from 'antd/lib/form/FormItem'

const { Option } = Select;

export default class ModalForm extends Component {
    normFile = (e) => {
        console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e?.fileList;
      };
    render() {
        const { item } = this.props;
        this.btnref = createRef();
        return (
            <Form ref={this.btnref}>
                <FormItem label="姓名"
                    name="name"
                    rules={[{ required: true, message: '请输入姓名' }]}>
                    <Input />
                </FormItem>
                <FormItem label="avatar"
                    name="avatar"
                    style={{marginLeft: '0px',}}
                    rules={[{ required: true, message: '请输入url' }]}>
                    <Input />
                </FormItem>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="select your gender">
                        <Option value="m">Male</Option>
                        <Option value="f">Female</Option>
                    </Select>
                </Form.Item>
                <FormItem label="年龄"
                    name="age"
                    rules={[{ required: true, message: '请输入年龄' }]}>
                    <InputNumber />
                </FormItem>

                <FormItem label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}>
                    <Input />
                </FormItem>
                <FormItem label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </FormItem>
                <FormItem label="科室编号"
                    name="deptID"
                    rules={[{ required: true, message: '请输入科室编号' }]}>
                    <Input />
                </FormItem>
                <FormItem label="职位"
                    name="post"
                    rules={[{ required: true, message: '请输入职位' }]}>
                    <Input />
                </FormItem>
                <FormItem label="介绍"
                    name="intro"
                    rules={[{ required: true, message: '请输入简介' }]}>
                    <Input />
                </FormItem>
            </Form>
        )
    }
}
