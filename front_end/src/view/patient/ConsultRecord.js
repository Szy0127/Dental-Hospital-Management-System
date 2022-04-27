import React, { useEffect, useState } from 'react'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Table, Divider } from 'antd';
import { getHistories } from "../../services/DataSurvice";

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
    const [history, setHistory] = useState([]);
    useEffect(
        () => {
            getHistories(1, (data) => {
                setHistory(data);
            });
        }, []
    );
    console.log(history);
    const renderItem = (list) => {
        return list.map((item) => (
            <Timeline.Item label={item.time} dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                {item.department} : {() => {
                    let record = JSON.parse(item.description)
                    return <div>
                        <p>{record.disease}</p>
                        <p>{record.commentA}</p>
                        <p>{record.commentB}</p>
                        <p>{record.commentC}</p>
                        <p>{record.medicine}</p>
                    </div>
            }}
            </Timeline.Item>
        ))
    }
    return (
        <div>
            <Divider />
            <Timeline mode="left">
                {renderItem(history)}
            </Timeline>
        </div>
    )
}