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
    const renderRecord = (des) =>{
        let record = JSON.parse(des)
        console.log(record)
        return <div>
            <p>疾病： {record.disease}</p>
            <p>初诊结果：{record.commentA}</p>
            <p>复诊结果：{record.commentB}</p>
            <p>最终结果：{record.commentC}</p>
            <p>所开药物：{record.medicine}</p>
        </div>
    }
    const renderItem = (list) => {
        return list.map((item) => (JSON.parse(item.description).commentA === ""?<></>:
            <Timeline.Item label={item.time} dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                {item.department} : {renderRecord(item.description)}
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