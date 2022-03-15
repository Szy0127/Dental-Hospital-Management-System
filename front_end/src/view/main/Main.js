import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import { Layout } from 'antd'

import './Main.css'

const { Content, Footer } = Layout;

const HomeMainPage = function () {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header/>
            <Layout className="site-layout">
                <SideBar></SideBar>
                <Content style={{ margin: '0 16px' }}>
                    <Outlet/>
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>Dental-Hospital</Footer>
        </Layout>
    )
}

export default HomeMainPage;
