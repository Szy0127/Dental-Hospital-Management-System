import React from 'react'
import LoginBox from '../../components/loginbox/LoginBox'
<<<<<<< HEAD
<<<<<<< HEAD
export default function Login() {
  return (
    <div>
        <div>
            
        </div>
=======
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
import './Login.css'
import logosrc from '../../assets/logo.jpeg'
export default function Login() {
  return (
    <div className='login'>
      <div className='login-container'>
        <div className='login-header'>
          <img src={logosrc} />
          <b>水源诊所</b>
        </div>
        <div className='loginbox'>
          <LoginBox></LoginBox>
        </div>
      </div>
<<<<<<< HEAD
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
    </div>
  )
}
