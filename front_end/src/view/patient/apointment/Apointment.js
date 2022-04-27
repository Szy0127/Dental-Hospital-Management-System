import React, { useState } from 'react';
import moment from 'moment'
import { Button, Cascader, Divider, Form, Table, Select, message, Popconfirm } from "antd";
import { DatePicker } from "antd/es";
import { addHistory, getDepartments, getDoctors, MngOrAftn } from "../../../services/DataSurvice";
import { AddAppointment, cancelAppointment, getAppointments, getPredictedTime } from '../../../services/PatientService';
import { render } from '@testing-library/react';
const { Option } = Select;


export default class Appointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: [],
            departments: [],
        }
    }
    componentDidMount() {
        getAppointments((data) => {
            console.log(data);
            this.setState({ record: data })
        });

        getDepartments({ search: null }, (data) => {
            this.setState({ departments: data })
        });
    }

    options = () => {
        return this.state.departments.map((item, idx) => {
            return {
                value: item.id,
                label: item.title,
                children: item.doctors.map((doc) => {
                    return {
                        value: doc.id,
                        label: doc.name,
                    }
                })
            }
        })
    }
    cancel = (record) => {
        console.log(record);
        const dataSource = [...this.state.record];
        let value = {
            "ranking":record.ranking,
            "doctorID":record.docID,
            "deptID":record.deptID,
            "date":record.date,
            "time":record.time
        }
        cancelAppointment(value,()=>{
            getAppointments((data) => {
                console.log(data);
                this.setState({ record: data })
            });
        });
    }
    columns = [
        {
            title: '挂号号码',
            dataIndex: 'ranking',
            key: 'ranking',
        },
        {
            title: '预约日期',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '预期就诊时间',
            dataIndex: 'Ptime',
            key: 'Ptime',
            render: (text, record) => (
                getPredictedTime(record.time, record.ranking)
            )
        },
        {
            title: '预约科室',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: '预约医生',
            dataIndex: 'doctor',
            key: 'doctor',
        },
        {
            title: '退号',
            dataIndex: 'cancel',
            key: 'cancel',
            render: (text, record) => (<Popconfirm title="是否要退号？" onConfirm={()=>{this.cancel(record)}}>
                <Button> 退号</Button>
            </Popconfirm>)
        }
    ];
    config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
        ],
    };
    timeConfig = {
        rules: [
            {
                required: true,
                message: 'Please choose',
            },
        ]
    };
    callback = (get) => {
        if (get != null) {
            getAppointments((data) => {
                this.setState({
                    record: data
                })
            });
        }
    }
    CanAppoint = (value) => {
        console.log(this.state.record);
        for (let i = 0; i < this.state.record.length; ++i) {
            if (this.state.record[i].date === value.date) {
                return false;
            }
        }
        return true;
    }
    onFinish = (fieldsvalue) => {
        const value = {
            'deptID': fieldsvalue['doctor'][0],
            'doctorID': fieldsvalue['doctor'][1],
            'date': fieldsvalue['date'].format('YYYY-MM-DD'),
            'time': fieldsvalue['time'],
        }
        console.log(value);
        if (this.CanAppoint(value)) {
            AddAppointment(value, this.callback);
            let Pid = localStorage.getItem("PatientID");
            addHistory(value.time,Pid,value.deptID,{});
        }
        else {
            message.error("一天仅能挂号一次");
        }
    }

    Time = [{ value: 'm', label: '上午' }, { value: 'a', label: '下午' }];

    render() {
        console.log(this.state.departments)
        return (
            <div>
                <Divider />
                <Form layout="inline"
                    onFinish={this.onFinish}>
                    <Form.Item label="预约日期" name="date" {...this.config}>
                        <DatePicker disabledDate={(date) => (
                            date.diff(moment(), 'days') < 0 || date.diff(moment(), 'days') >= 7
                        )} />
                    </Form.Item>
                    <Form.Item label="预约时间" name="time" {...this.timeConfig}>
                        <Select style={{ width: 120 }} >
                            {this.Time.map(item => (
                                <Option key={item.value}>{item.label}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="预约科室与医生" name="doctor" {...this.timeConfig}>
                        <Cascader options={this.options()} style={{ width: '150px' }} />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        我要挂号
                    </Button>
                </Form>
                <Divider />
                <Table
                    columns={this.columns}
                    dataSource={this.state.record}
                    pagination={
                        { pageSize: 5 }
                    }
                />
            </div>
        );
    }

}
