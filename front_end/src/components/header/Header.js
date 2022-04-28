import React from 'react'
import logosrc from '../../assets/logo.jpeg'
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import './Header.css'
import AvatarHover from './avatar/AvatarHover';



export default function Header(props) {
  const {islogin,setlogin} = props;
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  };

  return (
    <header>
      <div className='logo'>
        <h1>水源诊所</h1>
        <img src={logosrc}></img>
      </div>
      <div>
        {islogin?<AvatarHover setlogin={setlogin}/>:<Button onClick={handleLogin} >Login/Register</Button>}
      </div>
    </header>
  )
}
