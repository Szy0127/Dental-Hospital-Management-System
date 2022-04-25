import React from 'react'
<<<<<<< HEAD
import "./Home.css"
import NewsCarousel from '../../components/newsCarousel/NewsCarousel';
import InfoDisplay from '../../components/infoDisplay/InfoDisplay';
export default function Home() {
    const newsContext = require.context("../../assets/carousel", true, /^\.\/.*\.jpg$/);
    const news = ['abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];
    // const news = [];//['abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];
    const notice = ['kkkkkkkk', 'eeeeeee', 'vvvvvvv', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];
    // const notice = [];//['kkkkkkkk', 'eeeeeee', 'vvvvvvv', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];
    return (
        <React.Fragment>
            <NewsCarousel context={newsContext} />
            <div className="displayNotice">
                <InfoDisplay title="医院通知" items={notice} type="notice" />
            </div>
            <div className="displayNews">
                <InfoDisplay className="displayNews" title="医院新闻" items={news} type="news" />
            </div>
        </React.Fragment>
=======

import NewsCarousel from '../../components/newsCarousel/NewsCarousel';
import InfoDisplay from '../../components/infoDisplay/InfoDisplay';
import './Home.css'
import {Divider} from "antd";
import { notification,news } from '../../utils/data';

export default function Home() {
    const newsContext = require.context("../../assets/carousel", true, /^\.\/.*\.jpeg$/);
    // const news = ['abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];
    // const news = [];//['abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];
    // const notice = ['kkkkkkkk', 'eeeeeee', 'vvvvvvv', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];
    // const notice = [];//['kkkkkkkk', 'eeeeeee', 'vvvvvvv', 'ddddaafsdf', 'eeeeeee', 'abcabcd', 'aaaaaaa', 'ccccccc', 'ddddaafsdf', 'eeeeeee'];

    return (
        <div>
            <NewsCarousel context={newsContext} />
            <div className="displayNotice" id='news_list'>
                <InfoDisplay title="医院通知" items={notification} type="notice" />
            </div>
            <Divider />
            <div className="displayNews" id='new_list'>
                <InfoDisplay title="医院新闻" items={news} type="news" />
            </div>
            <Divider />
            <Divider />
        </div>
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
    )
}
