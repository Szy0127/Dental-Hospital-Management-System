import {Outlet} from 'react-router-dom'
import React from 'react'
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import NewsCarousel from '../../components/newsCarousel/NewsCarousel';
import InfoDisplay from '../../components/infoDisplay/InfoDisplay';
import {Layout} from 'antd'

import './Main.css'

const {Content} = Layout;

const HomeMainPage = function () {
    const newsContext = require.context("../../assets/carousel", true, /^\.\/.*\.jpg$/);
    const news = ['abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];
    // const news = [];//['abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];
    const notice = ['kkkkkkkk', 'eeeeeee', 'vvvvvvv', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];
    // const notice = [];//['kkkkkkkk', 'eeeeeee', 'vvvvvvv', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header/>
            <Layout className="site-layout">
                <SideBar></SideBar>
                <Content className="clearfix" style={{margin: '0 16px'}}>
                    <Outlet/>
                    <NewsCarousel context={newsContext}/>
                    <div className="displayNotice">
                        <InfoDisplay title="医院通知" items={notice} type="notice"/>
                    </div>
                    <div className="displayNews">
                        <InfoDisplay className="displayNews" title="医院新闻" items={news} type="news"/>
                    </div>
                </Content>
            </Layout>
            <Footer/>
        </Layout>
    )
}

export default HomeMainPage;