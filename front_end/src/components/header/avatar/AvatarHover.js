import React, { setState, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Dropdown, Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { logout } from '../../../services/UsrService';

export default function AvatarHover(props) {
  const [avatar, setAvatar] = useState();
  const {setlogin} = props;
  const navigate = useNavigate();
  const Dologout = () =>{
    let islogout = logout();
    if(islogout){
      navigate('/home');
      setlogin(false);
    }
  }  
  const UsrList = (
    <Menu>
      {/* <Menu.Item>
        <Link to={{
          pathname:'/patient/profile'
        }}>
        <a target="_blank" rel="noopener noreferrer">
          个人信息
        </a>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to={{
          pathname: '/patient/appointment',
        }}
        >
          <a target="_blank" rel="noopener noreferrer">
            我的预约
          </a>
        </Link>
      </Menu.Item>
      <Menu.Divider /> */}
      <Menu.Item danger onClick={Dologout}><Link to={{
          pathname: '/',
        }}
        >
            退出
        </Link></Menu.Item>
    </Menu>
  );
  

  return (
    <div>
      <span>
        <Dropdown overlay={UsrList} placement='bottomRight'>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Avatar shape="circle" icon={<UserOutlined />} />
          </a>
        </Dropdown>
      </span>
    </div>
  )
}
