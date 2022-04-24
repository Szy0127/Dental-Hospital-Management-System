import React, { useEffect, useState } from 'react';
import { appointment, data } from "../../../utils/data";
import { Button, Cascader, Divider, Form, Popconfirm, Select, Space, Table, TimePicker } from "antd";
import { DatePicker } from "antd/es";
import { Option } from "antd/es/mentions";
import moment from 'moment'
import { TimeAppointment, ADD_TO_APPOINT } from '../../../services/PatientService';

function Appointment() {

    const [record, setRecord] = useState([]);
    useEffect(
        () => {
            setRecord(appointment);
        }, []
    );

    const columns = [
        {
            title: '挂号号码',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '预约日期',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '预期时间',
            dataIndex: 'time',
            key: 'time',
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
    ];

    const handleDelete = (key) => {
        let oldRecord = [...record];
        setRecord(oldRecord.filter((item) => item.key !== key));
    }

    const FormItem = Form.Item;

    const options = [
        {
            value: '儿科',
            label: '儿科',
            children: [
                { value: 'Doctor A', label: 'Doctor A' },
                { value: 'Doctor B', label: 'Doctor B' },
                { value: 'Doctor C', label: 'Doctor C' },
            ]
        },
        {
            value: '内科',
            label: '内科',
            children: [
                { value: 'Doctor D', label: 'Doctor D' },
                { value: 'Doctor E', label: 'Doctor E' },
                { value: 'Doctor F', label: 'Doctor F' },
            ]
        },
    ];
    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
        ],
    };
    const timeConfig = {
        rules: [
            {
                required: true,
                message: 'Please choose',
            },
        ]
    };
    const callback = (data) => {
        if (data != null) {
            ADD_TO_APPOINT(data);
            newRecord = [data, ...record];
            setRecord(newRecord);
        }
    }
    const onFinish = (fieldsvalue) => {
        const value = {
            ...fieldsvalue,
            'date': fieldsvalue['date'].format('YYYY-MM-DD'),

        }
        console.log(value);
        TimeAppointment(data, callback);
    }
    const Time = ['上午', '下午'];
    return (
        <div>
            <Divider />
            <Form layout="inline"
                onFinish={onFinish}>
                <Form.Item label="预约日期" name="date" {...config}>
                    <DatePicker disabledDate={(date) => (
                        date.diff(moment(), 'days') > 7
                    )} />
                </Form.Item>
                <Form.Item label="预约时间" name="time" {...timeConfig}>
                    <Select style={{ width: 120 }} >
                        {Time.map(item => (
                            <Option key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="预约科室与医生" name="doctor" {...timeConfig}>
                    <Cascader options={options} style={{ width: '150px' }} />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    我要挂号
                </Button>
            </Form>

            <Divider />
            <Table
                columns={columns}
                dataSource={record}
                pagination={
                    { pageSize: 5 }
                }
            />
        </div>
    );
}

export default Appointment;
