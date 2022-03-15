import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import NewsCarousel from '../../components/newsCarousel/NewsCarousel';
import InfoDisplay from '../../components/infoDisplay/InfoDisplay';
import { Layout } from 'antd'

import './Main.css'

const { Content, Footer } = Layout;

const HomeMainPage = function () {
    const newsContext = require.context("../../assets/carousel", true, /^\.\/.*\.jpg$/);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header/>
            <Layout className="site-layout">
                <SideBar></SideBar>
                <Content style={{ margin: '0 16px' }}>
                    <Outlet/>
                    <NewsCarousel context={newsContext}/>
                    <div className="displayInfos"><InfoDisplay title="医院通知"/></div>
                    <div className="displayNews"><InfoDisplay className="displayNews" title="医院新闻"/></div>
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>Dental-Hospital</Footer>
        </Layout>
    )
}

export default HomeMainPage;
