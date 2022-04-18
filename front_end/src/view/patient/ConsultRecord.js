import React from 'react'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Table, Tag, Space, Divider } from 'antd';
import {history} from "../../utils/data";

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

export default function ConsultRecord() {
    return (
        <div>
            <Table columns={columns} dataSource={history} />
            <Divider />
        <Timeline mode="alternate">
            <Timeline.Item>感冒 2020-9-1 东川路诊所</Timeline.Item>
            <Timeline.Item color="green">感冒治愈</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                获得急性肠胃炎 在水源诊所治疗
            </Timeline.Item>
            <Timeline.Item>感冒 2021-12-2 东川路诊所</Timeline.Item>
            <Timeline.Item color="green">感冒治愈</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                获得急性肠胃炎 在水源诊所治疗
            </Timeline.Item>
            <Timeline.Item>感冒 2022-9-1 东川路诊所</Timeline.Item>
            <Timeline.Item color="green">感冒治愈</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                获得急性肠胃炎 在水源诊所治疗
            </Timeline.Item>
            <Timeline.Item color="green">急性肠胃炎治愈 2022-2-1</Timeline.Item>
            <Timeline.Item>2022-3-14前来就诊</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                进行测试
            </Timeline.Item>
        </Timeline>

        </div>
    )
}
