import React from 'react'
import { List, Avatar } from 'antd';
import {Link} from "react-router-dom";

export const data = [
    {
        id: '1',
        title: 'Doctor A',
        belong: '儿科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '2',
        title: 'Doctor B',
        belong: '儿科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '3',
        title: 'Doctor C',
        belong: '儿科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '4',
        title: 'Doctor D',
        belong: '儿科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '5',
        title: 'Doctor E',
        belong: '儿科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
];

export const data2 = [
    {
        id: '1',
        title: 'Doctor A',
        belong: '外科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '2',
        title: 'Doctor B',
        belong: '外科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '3',
        title: 'Doctor C',
        belong: '外科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '4',
        title: 'Doctor D',
        belong: '外科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '5',
        title: 'Doctor E',
        belong: '外科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
];

export default function Profilelist() {



    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>

                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                        title={<Link to={`/doctor/detailedInfo/?id=${item.id}`} >
                            {item.title}
                        </Link>}
                        description="医生简短简介 点击进入可查看详情"
                    />
                </List.Item>
            )}
        />
    )
}
