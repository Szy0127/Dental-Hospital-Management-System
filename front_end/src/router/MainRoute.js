import React from 'react'
import {Route, Routes} from 'react-router-dom';

import Home from '../view/home/Home';
import Login from '../view/login/Login'
import Doctor from '../view/doctor/Doctor'
import Administer from '../view/administer/Administer'
import Patient from '../view/patient/Patient'
/* Main 测试用 应该是主题封装*/
import Main from '../view/main/Main'
import InfoPage from '../view/home/Info'

export default function MainRoute() {
    return (
        <Routes>
            <Route path='/' element={<Main/>}>
                <Route path='/home' element={<Home/>}/>
                <Route path='/administer' element={<Administer/>}/>
                <Route path='/patient' element={<Patient/>}/>
                <Route path='/doctor' element={<Doctor/>}/>
            </Route>
            <Route path='/info/news' element={<InfoPage title="医院新闻"/>}/>
            <Route path='/info/notice' element={<InfoPage title="医院通知"/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}
