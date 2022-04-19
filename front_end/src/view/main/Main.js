import {Outlet} from 'react-router-dom'
import React from 'react'
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {Layout} from 'antd'

import './Main.css'

const {Content} = Layout;

const HomeMainPage = function () {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header/>
            <Layout className="site-layout">
                <SideBar></SideBar>
                <Content style={{margin: '0 16px'}}>
                    <Outlet/>
                </Content>
            </Layout>
            <Footer/>
        </Layout>
    )
}

export default HomeMainPage;