import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import {Route, Routes} from 'react-router-dom';

import Home from '../view/home/Home';
import Login from '../view/login/Login'
import Doctor from '../view/doctor/Doctor'
import Administer from '../view/administer/Administer'
import Patient from '../view/patient/Patient'
/* Main 测试用 应该是主题封装*/
import Main from '../view/main/Main'
import InfoPage from '../view/home/Info'
=======
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
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
import InfoPage from '../view/home/Info'
import Apointment from '../view/patient/apointment/Apointment';
import DetailedInfo from "../view/doctor/profilelist/detailedInfo";
import Profilelist from "../view/doctor/profilelist/Profilelist";
import DoctorInfo from '../view/administer/doctorInfo/DoctorInfo';
import Management from '../view/administer/Management';
import NewsEditList from '../view/administer/newEdit/NewsEdit';
import Edit from '../view/administer/newEdit/Edit';
import HomeMainPage from '../view/main/Main';
<<<<<<< HEAD
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24

export default function MainRoute() {
    return (
        <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path='/' element={<Main/>}>
                <Route path='/home' element={<Home/>}/>
                <Route path='/administer' element={<Administer/>}/>
                <Route path='/patient' element={<Patient/>}/>
                <Route path='/doctor' element={<Doctor/>}/>
            </Route>
            <Route path='/info/news' element={<InfoPage title="医院新闻"/>}/>
            <Route path='/info/notice' element={<InfoPage title="医院通知"/>}/>
            <Route path='/login' element={<Login/>}/>
=======
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
            <Route path='/' element={<HomeMainPage />}>
                <Route path='/home' element={<Home />} />
                <Route path='/administer' element={<Administer />} >
                    <Route path='/administer/doctorInfo' element={<DoctorInfo />} />
                    <Route path='/administer/management' element={<Management />} />
                    <Route path='/administer/editlist' element={<NewsEditList />} />
                    <Route path='/administer/infoedit' element={<Edit />} />
                </Route>
                <Route path='/patient'>
                    <Route path='/patient/appointment' element={<Apointment />} />
                    <Route path='/patient/consultation' element={<ConsultRecord />} />
                    <Route path='/patient/profile' element={<Patient />} />
                </Route>
                <Route path='/doctor' element={<Doctor />}>
                    <Route path='/doctor/profile' element={<Profilelist/>} />
                    <Route path='/doctor/detailedInfo' element={<DetailedInfo />} />
                    <Route path='/doctor/patientinfo' element={<PatientConsult />} />
                    <Route path='/doctor/schedule' element={<Schedule />} />
                </Route>
            </Route>
            <Route path='/info/news' element={<InfoPage title="医院新闻" />} />
            <Route path='/info/notice' element={<InfoPage title="医院通知" />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
<<<<<<< HEAD
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
        </Routes>
    )
}
