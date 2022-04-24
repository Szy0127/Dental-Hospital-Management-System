import React, { useEffect, useState } from 'react'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Table, Tag, Space, Divider } from 'antd';
import { history } from "../../utils/data";

const columns = [
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Place',
        dataIndex: 'place',
        key: 'place',
    },
    {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    }
];

export default function ConsultRecord(props) {
    const [consult, setConsult] = useState([]);
    useEffect = () =>{
        ()=>{
            
        },[]
    }
    const renderItem = (list) => {
        return list.map((item) => {
            <Timeline.Item label={item.date} dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                {item.sym}
                {item.medicine}
                </Timeline.Item>
        })
    }
    return (
        <div>
            <Table columns={columns} dataSource={history} />
            <Divider />
            <Timeline mode="left">
                {renderItem(consult)}
            </Timeline>
        </div>
    )
}
