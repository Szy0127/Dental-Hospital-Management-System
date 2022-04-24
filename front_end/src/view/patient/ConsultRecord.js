import React from 'react'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Table, Divider } from 'antd';
import {getHistories} from "../../services/DataSurvice";

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
export default class ConsultRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
        }
    }

    componentDidMount() {
        getHistories({'search': null}, (data) => {
            this.setState({history: data});
        });
    }

    render() {
        console.log(this.state.history)
        return (
            <div>
                <Table columns={columns} dataSource={this.state.history} />
                <Divider />
                <Timeline mode="alternate">
                    <Timeline.Item>感冒 2020-9-1 东川路诊所</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        获得急性肠胃炎 在水源诊所治疗
                    </Timeline.Item>
                    <Timeline.Item>感冒 2021-12-2 东川路诊所</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        获得急性肠胃炎 在水源诊所治疗
                    </Timeline.Item>
                    <Timeline.Item>感冒 2022-9-1 东川路诊所</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        获得急性肠胃炎 在水源诊所治疗
                    </Timeline.Item>
                    <Timeline.Item>2022-3-14前来就诊</Timeline.Item>
                </Timeline>
            </div>
        );
    }

