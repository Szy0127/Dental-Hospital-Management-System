import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './SideBar.css'
import {
    HomeOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MedicineBoxOutlined,
} from '@ant-design/icons';
import Item from 'antd/lib/list/Item';

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuList = [
    {
        key: "home",
        title: "首页",
        icon: <HomeOutlined />
    },
    {
        key: "doctor",
        title: "医生介绍",
        icon: <MedicineBoxOutlined />,
        children: [
            {
                key: "doctor/client1",
                title: "科室一",
                icon: <MedicineBoxOutlined />,
                children: [
                    {
                        key: "doctor/client1/a",
                        title: "A",
                        icon: <MedicineBoxOutlined />
                    },
                    {
                        key: "doctor/client1/b",
                        title: "B",
                        icon: <MedicineBoxOutlined />
                    }
                ]
            },
            {
                key: "doctor/client2",
                title: "科室二",
                icon: <MedicineBoxOutlined />,
                children: [
                    {
                        key: "doctor/client2/a",
                        title: "A",
                        icon: <MedicineBoxOutlined />
                    },
                    {
                        key: "doctor/client2/b",
                        title: "B",
                        icon: <MedicineBoxOutlined />
                    }
                ]
            }
        ]
    },
]

export default function SideBar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [defaultKey, setDefaultKey] = useState('list')
    useEffect(() => {
        console.log(location.pathname)
        let path = location.pathname
        let key = path.split('/')[1]
    }, [])

    const handleClick = e => {
        console.log('/' + e.key)
        navigate('/' + e.key)
    };
    const renderMenu = (menuList) => {
        return menuList.map(item => {
            if (item.children) {
                return <SubMenu key={item.key} icon={item.icon} title={item.title}>
                    {renderMenu(item.children)}
                </SubMenu>
            }
            return <Menu.Item key={item.key} icon={item.icon} onClick={handleClick}>{item.title}</Menu.Item>
        })
    }
    return (
        <Sider trigger={null}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['doctor']} defaultOpenKeys={['doctor']}>
                {/* <Menu.Item key="home" icon={<HomeOutlined/>}>首页</Menu.Item>
                <SubMenu key="doctor" icon={<MedicineBoxOutlined />} title="医生介绍">
                    <SubMenu key="client1"  title="科室一">
                        <Menu.Item key="c1A">A</Menu.Item>
                        <Menu.Item key="c1B">B</Menu.Item>
                    </SubMenu>
                    <SubMenu key="client1" title="科室二">
                        <Menu.Item key="c2A">A</Menu.Item>
                        <Menu.Item key="c2B">B</Menu.Item>
                    </SubMenu>
                </SubMenu> */}
                {renderMenu(menuList)}
            </Menu>
        </Sider>
    )
}
