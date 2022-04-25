import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { useNavigate,useLocation} from 'react-router-dom';
=======
import { useNavigate, useLocation } from 'react-router-dom';
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
import { Layout, Menu } from 'antd';

import './SideBar.css'
import {
<<<<<<< HEAD
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MailOutlined,
=======
    HomeOutlined,
    MedicineBoxOutlined,
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

<<<<<<< HEAD
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
=======
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
                        key: "doctor/patientinfo",
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
            },
            {
                identity: "doctor",
                key: "docotor/profile",
                title: "个人信息",
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
    },
    {
        identity:"administer",
        key: "administer/authority",
        title: "管理员权限设置",
        icon: <MedicineBoxOutlined />,
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
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
    return (
        <Sider trigger={null}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['doctor']} defaultOpenKeys={['doctor']}>
<<<<<<< HEAD
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
=======
                {renderMenu(menuList)}
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
            </Menu>
        </Sider>
    )
}
