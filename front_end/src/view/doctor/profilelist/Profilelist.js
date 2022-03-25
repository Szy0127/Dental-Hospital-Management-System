import React from 'react'
import { List, Avatar } from 'antd';

const data = [
    {
        title: 'Doctor A',
    },
    {
        title: 'Doctor B',
    },
    {
        title: 'Doctor C',
    },
    {
        title: 'Doctor D',
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
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="医生简短简介 点击进入可查看详情"
                    />
                </List.Item>
            )}
        />
    )
}
