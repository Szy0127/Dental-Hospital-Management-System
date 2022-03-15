import React from 'react'
import { Routes , Route } from 'react-router-dom';

import Login from '../view/login/Login'
import Doctor from '../view/doctor/Doctor'
import Administer from '../view/administer/Administer'
import Patient from '../view/patient/Patient'
/* Main 测试用 应该是主题封装*/
import Main from '../view/main/Main'

export default function MainRoute() {
  return (
    <Routes>
        <Route path='/' element={<Main/>}>
          <Route path='/administer' element={<Administer/>}/>
          <Route path='/patient' element={<Patient/>}/>
          <Route path='/doctor' element={<Doctor/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}
