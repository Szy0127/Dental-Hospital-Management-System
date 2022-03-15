import React from 'react'
import logosrc from '../../assets/logo.jpeg'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './Header.css'



export default function Header() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  };

  return (
    <header>
      <div className='logo'>
        <h1>水源牙科诊所</h1>
        <img src={logosrc}></img>
      </div>
      <div>
        <Button onClick={handleLogin}>Login/Register</Button>
      </div>
    </header>
  )
}
