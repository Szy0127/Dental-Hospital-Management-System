import React from 'react'
import { List, Avatar } from 'antd';
import {Link} from "react-router-dom";

export const data2 = [
    {
        id: '5',
        title: 'Doctor A',
        belong: '内科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '6',
        title: 'Doctor B',
        belong: '内科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '7',
        title: 'Doctor C',
        belong: '内科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '8',
        title: 'Doctor D',
        belong: '内科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
    {
        id: '10',
        title: 'Doctor E',
        belong: '内科',
        gender: '男',
        age: '40',
        position: '儿科主任',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        info: '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生',
    },
];

export default function Profilelist2() {

    return (
        <List
            itemLayout="horizontal"
            dataSource={data2}
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
