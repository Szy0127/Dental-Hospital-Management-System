import React from 'react'
import logosrc from '../../assets/logo.jpeg'
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { Button } from 'antd';
import './Header.css'



export default function Header() {
  const navigate = useNavigate()

=======
import { Avatar, Button } from 'antd';
import './Header.css'
import AvatarHover from './avatar/AvatarHover';



export default function Header(props) {
  const {islogin} = props;
  const navigate = useNavigate()
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
  const handleLogin = () => {
    navigate('/login')
  };

  return (
    <header>
      <div className='logo'>
<<<<<<< HEAD
        <h1>水源牙科诊所</h1>
        <img src={logosrc}></img>
      </div>
      <div>
        <Button onClick={handleLogin}>Login/Register</Button>
=======
        <h1>水源诊所</h1>
        <img src={logosrc}></img>
      </div>
      <div>
        {islogin?<AvatarHover/>:<Button onClick={handleLogin}>Login/Register</Button>}
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
      </div>
    </header>
  )
}
