import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Home.css'
import Footer from "../../components/footer/Footer";
import img from './img.png'
import { Divider } from "antd"
import InfoDisplay from "../../components/infoDisplay/InfoDisplay";
import { getNews, getNotifications } from "../../services/DataSurvice";

export default function InfoPage(props) {
    let location = useLocation();
    const query = location.search;
    const arr = query.split('&');
    const id = arr[0].substr(4);
    console.log(id);
    console.log(props.title);

    const [notification, setNotification] = useState([]);
    const [news, setNews] = useState([]);
    const [findResult, setfindResult] = useState({});
    useEffect(() => {
        if (props.title === '医院通知') {
            getNotifications((data) => {
                for(let i = 0;i < data.length;++i){
                    if(data[i].id === parseInt(id)){
                        console.log(data[i]);
                        setfindResult(data[i])
                        break;
                    }
                }
                setNotification(notification);
            })
        }
        else {
            getNews((data) => {
                setfindResult(data.find((infoObj) => {
                    return infoObj.id === parseInt(id)
                })
                );
                setNews(data)
            })
        }
    }, [])


    return (
        <React.Fragment>
            <img src={img} alt='' id='news' />
            <h1 id='head'>{props.title + ' : ' + findResult.title}</h1>
            <h2 id='date'>发布日期：{findResult.date}</h2>

            <div id='content'>
                <h1>{findResult.content}</h1>
            </div>

            <Divider />

            <div className="displayNotice" id='lead'>
                {
                    (props.title === '医院通知') && (<InfoDisplay title="其他通知" items={notification} type="notice" />)
                }
                {
                    !(props.title === '医院通知') && (<InfoDisplay title='其他新闻' items={news} types='news' />)
                }
            </div>

            <Divider />
            <Divider />

            <Footer />
        </React.Fragment>
    )
}

