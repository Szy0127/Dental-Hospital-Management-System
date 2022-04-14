import React from 'react'
import {useLocation} from "react-router-dom";
import {Descriptions, Divider, Image} from "antd";
import '../style1.css'
import { data,data2 } from '../../../utils/data';

export default function DetailedInfo() {

    let location = useLocation();
    const query = location.search;
    const arr = query.split('&');
    const id = arr[0].substr(4);

    let findResult = {}
    if (id >= 5) {
        findResult = data2.find((infoObj) => {
            return infoObj.id === id
        })
    }
    else {
        findResult = data.find((infoObj) => {
            return infoObj.id === id
        })
    }

    return (
    <div>
        <Image
            width={350}
            src={findResult.avatar}
            id='avatar'
        />

        <Descriptions
            title="医生信息"
            bordered
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
            <Descriptions.Item label="姓名">{findResult.title}</Descriptions.Item>
            <Descriptions.Item label="性别">{findResult.gender}</Descriptions.Item>
            <Descriptions.Item label='编号'>{findResult.id}</Descriptions.Item>
            <Descriptions.Item label="所在科室">{findResult.belong}</Descriptions.Item>
            <Descriptions.Item label="年龄">{findResult.age}</Descriptions.Item>
            <Descriptions.Item label="职位">{findResult.position}</Descriptions.Item>
            <Descriptions.Item label="个人背景">
                {findResult.info}
            </Descriptions.Item>
        </Descriptions>

        <Divider />
    </div>
    )
}
