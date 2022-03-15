import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation} from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './SideBar.css'
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu = (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
        </Menu.Item>
    </Menu>
);

export default function SideBar() {
    // const navigate = useNavigate()
    // const location = useLocation()
    // const [defaultKey, setDefaultKey] = useState('list')
    // useEffect(() => {
    //     console.log(location.pathname)
    //     let path = location.pathname
    //     let key = path.split('/')[1]
    // }, [])

    // const handleClick = e => {
    //     console.log('/' + e.key)
    //     navigate('/' + e.key)
    // };
    return (
        <Sider trigger={null}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['doctor']} defaultOpenKeys={['doctor']}>
                <SubMenu key="doctor" icon={<MailOutlined />} title="医生介绍">
                    <SubMenu key="client1" icon={<MailOutlined />} title="科室一">
                        <Menu.Item key="c1A">A</Menu.Item>
                        <Menu.Item key="c1B">B</Menu.Item>
                    </SubMenu>
                    <SubMenu key="client1" icon={<MailOutlined />} title="科室二">
                        <Menu.Item key="c2A">A</Menu.Item>
                        <Menu.Item key="c2B">B</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </Sider>
    )
}
