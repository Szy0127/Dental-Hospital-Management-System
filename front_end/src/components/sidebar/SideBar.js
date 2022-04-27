import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './SideBar.css'
import {
    HomeOutlined,
    MedicineBoxOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuList = [
    {
        identity: "all",
        key: "home",
        title: "首页",
        icon: <HomeOutlined />
    },
    {
        identity: "all",
        key: "info",
        title: "医生介绍",
        icon: <MedicineBoxOutlined />,
        children: [
            {
                key: "doctor/profile?id=1",
                title: "科室一",
                icon: <MedicineBoxOutlined />,
            },
            {
                key: "doctor/profile?id=2",
                title: "科室二",
                icon: <MedicineBoxOutlined />,
            }
        ]
    },
    {
        identity: "patient",
        key: "patient",
        title: "患者",
        icon: <MedicineBoxOutlined />,
        children: [
            {
                key: "patient/appointment",
                title: "预约挂号",
                icon: <MedicineBoxOutlined />
            },
            {
                key: "patient/consultation",
                title: "就诊记录",
                icon: <MedicineBoxOutlined />
            },
            {
                key: "patient/profile",
                title: "个人信息",
                icon: <MedicineBoxOutlined />
            }
        ]
    },
    {
        identity: "doctor",
        key: "doctor",
        title: "医生",
        icon: <MedicineBoxOutlined />,
        children: [
            {
                identity: "doctor",
                key: "doctor/patient",
                title: "患者信息",
                icon: <MedicineBoxOutlined />,
                children: [
                    {
                        key: "doctor/patientlist",
                        title: "诊疗信息",
                        icon: <MedicineBoxOutlined />
                    },
                    {
                        key: "doctor/appointment",
                        title: "办理转诊",
                        icon: <MedicineBoxOutlined />
                    }
                ]
            },
            {
                identity: "doctor",
                key: "doctor/schedule",
                title: "排班表",
                icon: <MedicineBoxOutlined />
            }
        ]
    },
    {
        identity: "administer",
        key: "administer",
        title: "信息管理",
        icon: <MedicineBoxOutlined />,
        children: [
            {
                key: "administer/management",
                title: "科室医生管理",
                icon: <MedicineBoxOutlined />
            },
            {
                key: "administer/info",
                title: "个人信息",
                icon: <MedicineBoxOutlined />
            },
            {
                key: "administer/editlist",
                title: "新闻管理",
                icon: <MedicineBoxOutlined />
            }
        ]
    }
]

export default function SideBar(props) {
    const { identity } = props;
    console.log(identity);
    const navigate = useNavigate();
    const location = useLocation();
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
            if (item.children && (item.identity === "all" || item.identity === identity)) {
                return <SubMenu key={item.key} icon={item.icon} title={item.title}>
                    {renderMenu(item.children)}
                </SubMenu>
            }
            else if(!item.children){
                return <Menu.Item key={item.key} icon={item.icon} onClick={handleClick}>{item.title}</Menu.Item>
            }
        })
    }
    return (
        <Sider trigger={null}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['doctor']} defaultOpenKeys={['doctor']}>
                {renderMenu(menuList)}
            </Menu>
        </Sider>
    )
}
