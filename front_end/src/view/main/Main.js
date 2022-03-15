import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import { Layout } from 'antd'
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
const {Content} = Layout;

const HomeMainPage = function(){
    return(
        <section className='home-main'>
            <Layout>
                <SideBar></SideBar>
                <Layout className="site-layout">
                    <Header></Header>
                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </section>
    )
}

export default HomeMainPage;
