import React from 'react'
import RegistrationForm from '../../components/registerform/Registerform'
import './Register.css'
import logosrc from '../../assets/logo.jpeg'
export default function Register() {
    return (
        <div className='login'>
            <div className='login-container'>
                <div className='login-header'>
                    <img src={logosrc} />
                    <b>水源诊所</b>
                </div>
                <div className='loginbox'>
                    <RegistrationForm />
                </div>
            </div>
        </div>
    )
}
