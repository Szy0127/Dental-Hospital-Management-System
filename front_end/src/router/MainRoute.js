import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from '../view/home/Home';
import Login from '../view/login/Login'
import Register from '../view/register/Register';
import Doctor from '../view/doctor/Doctor'
import PatientConsult from '../view/doctor/patientInfo/PatientConsult'
import Schedule from '../view/doctor/schedule/schedule';
import Administer from '../view/administer/Administer'
import Patient from '../view/patient/Patient'
import ConsultRecord from '../view/patient/ConsultRecord';
/* Main 测试用 应该是主题封装*/
import Main from '../view/main/Main'
import InfoPage from '../view/home/Info'
import Apointment from '../view/patient/apointment/Apointment';
import DetailedInfo from "../view/doctor/profilelist/detailedInfo";
import Profilelist2 from "../view/doctor/profilelist/Profilelist2";
import Profilelist from "../view/doctor/profilelist/Profilelist";

export default function MainRoute() {
    return (
        <Routes>
            <Route path='/' element={<Main />}>
                <Route path='/home' element={<Home />} />
                <Route path='/administer' element={<Administer />} />
                <Route path='/patient' element={<Patient />}>
                    <Route path='/patient/appointment' element={<Apointment />} />
                    <Route path='/patient/consultation' element={<ConsultRecord />} />
                </Route>
                <Route path='/doctor' element={<Doctor />}>
                    <Route path='/doctor/profile' element={<Profilelist />} />
                    <Route path='/doctor/profile2' element={<Profilelist2 />} />
                    <Route path='/doctor/detailedInfo' element={<DetailedInfo />} />
                    <Route path='/doctor/patientinfo' element={<PatientConsult />} />
                    <Route path='/doctor/schedule' element={<Schedule />} />
                </Route>
            </Route>
            <Route path='/info/news' element={<InfoPage title="医院新闻" />} />
            <Route path='/info/notice' element={<InfoPage title="医院通知" />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}
