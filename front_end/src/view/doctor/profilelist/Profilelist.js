import React from 'react'
import { List, Avatar } from 'antd';
import { Link } from "react-router-dom";
import { data } from '../../../utils/data';
export default function Profilelist() {

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
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
