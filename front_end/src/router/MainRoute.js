import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from '../view/home/Home';
import Login from '../view/login/Login'
import Register from '../view/register/Register';
import Doctor from '../view/doctor/Doctor'
import PatientConsult from '../view/doctor/patientInfo/PatientConsult'
import Administer from '../view/administer/Administer'
import Patient from '../view/patient/Patient'
import ConsultRecord from '../view/patient/ConsultRecord';
import InfoPage from '../view/home/Info'
import Apointment from '../view/patient/apointment/Apointment';
import DetailedInfo from "../view/doctor/profilelist/detailedInfo";
import Profilelist2 from "../view/doctor/profilelist/Profilelist2";
import Profilelist from "../view/doctor/profilelist/Profilelist";
import DoctorInfo from '../view/administer/doctorInfo/DoctorInfo';
import Management from '../view/administer/Management';
import NewsEditList from '../view/administer/newEdit/NewsEdit';
import Edit from '../view/administer/newEdit/Edit';
import HomeMainPage from '../view/main/Main';
import Assignment from '../view/doctor/Assignment';

export default function MainRoute() {
    return (
        <Routes>
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
                    <Route path='/doctor/profile' element={<Profilelist />} />
                    <Route path='/doctor/profile2' element={<Profilelist2 />} />
                    <Route path='/doctor/detailedInfo' element={<DetailedInfo />} />
                    <Route path='/doctor/patientinfo' element={<PatientConsult />} />
                    <Route path='/doctor/schedule' element={<Assignment/>} />
                </Route>
            </Route>
            <Route path='/info/news' element={<InfoPage title="医院新闻" />} />
            <Route path='/info/notice' element={<InfoPage title="医院通知" />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}
