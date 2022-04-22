import React, {useState} from 'react';
import {appointment} from "../../../utils/data";
import {Button, Cascader, Divider, Form, Popconfirm, Select, Space, Table, TimePicker} from "antd";
import {DatePicker} from "antd/es";
import {Option} from "antd/es/mentions";

function Appointment() {

    const [record, setRecord] = useState(appointment);

    const columns = [
        {
            title: '挂号记录',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '预约日期',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '预约时间',
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
                {value: 'Doctor A', label: 'Doctor A'},
                {value: 'Doctor B', label: 'Doctor B'},
                {value: 'Doctor C', label: 'Doctor C'},
            ]
        },
        {
            value: '内科',
            label: '内科',
            children: [
                {value: 'Doctor D', label: 'Doctor D'},
                {value: 'Doctor E', label: 'Doctor E'},
                {value: 'Doctor F', label: 'Doctor F'},
            ]
        },
    ];

    return (
        <div>


            <Divider />

            <Form layout="inline">
                <FormItem label="预约日期">
                    <DatePicker />
                </FormItem>
                <FormItem label="预约时间">
                    <TimePicker.RangePicker />
                </FormItem>
                <FormItem label="预约科室与医生">
                    <Cascader options={options} style={{width: '150px'}} />
                </FormItem>
                <Button type="primary">
                    我要挂号
                </Button>
            </Form>

            <Divider />
            <Table
                columns={columns}
                dataSource={record}
                pagination={
                    {pageSize: 5}
                }
            />
        </div>
    );
}

export default Appointment;
