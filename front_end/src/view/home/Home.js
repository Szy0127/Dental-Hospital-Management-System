import React from 'react'
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
    )
}
