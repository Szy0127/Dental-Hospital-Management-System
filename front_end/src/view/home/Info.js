import React from "react";
import {useLocation} from "react-router-dom";
<<<<<<< HEAD

const InfoPage = function (props) {
=======
import './Home.css'
import Footer from "../../components/footer/Footer";
import { news,notification } from "../../utils/data";
import img from './img.png'
import {Divider} from "antd"
import InfoDisplay from "../../components/infoDisplay/InfoDisplay";

const InfoPage = function (props) {

>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
    let location = useLocation();
    const query = location.search;
    const arr = query.split('&');
    const id = arr[0].substr(4);
<<<<<<< HEAD
    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            <p>{id}</p>
        </React.Fragment>
    )
}
export default InfoPage;
=======

    let findResult = {}
    let isNotice
    if (props.title === '医院通知') {
        isNotice = true
        findResult = notification.find((infoObj) => {
            return infoObj.id === id
        })
    }
    else {
        isNotice = false
        findResult = news.find((infoObj) => {
            return infoObj.id === id
        })
    }

    return (
        <React.Fragment>
            <img src={img} alt='' id='news'/>
            <h1 id='head'>{props.title + ' : ' + findResult.title}</h1>
            <h2 id='date'>发布日期：{findResult.date}</h2>

            <div id='content'>
            <h1>{findResult.content}</h1>
            </div>

            <Divider />

            <div className="displayNotice" id='lead'>
                {
                    isNotice && (<InfoDisplay title="其他通知" items={notification} type="notice"/>)
                }
                {
                    !isNotice && (<InfoDisplay title='其他新闻' items={news} types='news' />)
                }
            </div>

            <Divider />
            <Divider />

            <Footer />
        </React.Fragment>
    )
}

export default InfoPage;
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
