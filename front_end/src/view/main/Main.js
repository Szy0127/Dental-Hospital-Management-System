import {Outlet} from 'react-router-dom'
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
=======
import React, { useEffect, useState } from 'react'
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
=======
import React, { useEffect, useState } from 'react'
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {Layout} from 'antd'

import './Main.css'

const {Content} = Layout;

<<<<<<< HEAD
<<<<<<< HEAD
const HomeMainPage = function () {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header/>
            <Layout className="site-layout">
                <SideBar></SideBar>
=======
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
const HomeMainPage = function (props) {
    // const {identity} = props;
    // console.log(identity);
    const [login, setLogin] = useState(false);
    const [identity, setIdentity] = useState("");
    const checkAuth = (data) =>{
        if(data.state >= 0){
            setLogin(true);
            setIdentity(data.data.identity);
        }
    }
    useEffect(() => {
        setIdentity("patient");
        // UsrService.checkSession(checkAuth);
    }, []);
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header identity = {identity} islogin = {true}/>
            <Layout className="site-layout">
                <SideBar identity = {identity}></SideBar>
<<<<<<< HEAD
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
                <Content style={{margin: '0 16px'}}>
                    <Outlet/>
                </Content>
            </Layout>
            <Footer/>
        </Layout>
    )
}

export default HomeMainPage;