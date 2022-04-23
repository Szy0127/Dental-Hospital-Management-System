import {Outlet} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {Layout} from 'antd'

import './Main.css'

const {Content} = Layout;

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
                <Content style={{margin: '0 16px'}}>
                    <Outlet/>
                </Content>
            </Layout>
            <Footer/>
        </Layout>
    )
}

export default HomeMainPage;