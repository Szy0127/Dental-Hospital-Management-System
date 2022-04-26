import React from 'react'
import LoginBox from '../../components/loginbox/LoginBox'
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
    </div>
  )
}
