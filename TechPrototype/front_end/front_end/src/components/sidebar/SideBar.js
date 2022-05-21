import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './SideBar.css'
import {
    HomeOutlined,
    MedicineBoxOutlined,
} from '@ant-design/icons';
import {getDepartments} from "../../services/DataSurvice";
import {data} from "../../utils/data";

const { Sider } = Layout;
const { SubMenu } = Menu;



let menuList = [
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
                title: "口腔外科",
                icon: <MedicineBoxOutlined />,
            },
            {
                key: "doctor/profile?id=2",
                title: "口腔内科",
                icon: <MedicineBoxOutlined />,
            },
            {
                key: "doctor/profile?id=3",
                title: "口腔神经科",
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
            },
            // {
            //     key: "doctor/detailedinfo",
            //     identity: "doctor",
            //     title: "个人信息",
            //     icon: <MedicineBoxOutlined />
            // }

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

    const [dept, setDept] = useState([]);

    const { identity } = props;
    console.log(identity);
    const navigate = useNavigate();
    const location = useLocation();
    const [defaultKey, setDefaultKey] = useState('list')

    const addDept = (data) => {
        let index = menuList.findIndex((item) => {
            return item.key === 'info'
        })
        console.log(menuList[index])
        let num_of_dept = data.length;
        console.log(num_of_dept)
        data.map(item => {
            console.log(item)
            let tmp = {
                key: 'doctor/profile?id=' + item.id,
                title: item.title,
                icon: <MedicineBoxOutlined />
            }
            menuList[index].children.push(tmp)
        })
        console.log("after:")
        console.log(menuList)
    }

    useEffect(() => {
        console.log(location.pathname)
        let path = location.pathname
        let key = path.split('/')[1]

        const callback = (data) => {
            console.log("DEPT:")
            console.log(data)
            setDept(data);
            // addDept(data);
        }
        getDepartments(1, callback);

    }, [])

    const handleClick = e => {
        console.log('/' + e.key)
        navigate('/' + e.key)
    };

    const renderMenu = (menuList) => {
        console.log("render menu:")
        console.log(menuList)
        return menuList.map(item => {
            if (item.children && (item.identity === "all" || item.identity === identity)) {
                return <SubMenu key={item.key} icon={item.icon} title={item.title}>
                    {
                        renderMenu(item.children)
                    }
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
