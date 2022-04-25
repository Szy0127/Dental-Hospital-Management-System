<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'

export default function Apointment() {
  return (
    <div>Apointment</div>
  )
}
=======
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
import React, {useState} from 'react';
import {Button, Cascader, Divider, Form, Table, TimePicker} from "antd";
import {DatePicker} from "antd/es";
import {getAppointments, getDepartments, getDoctors, MngOrAftn} from "../../../services/DataSurvice";

const columns = [
    {
        title: '挂号记录',
        dataIndex: 'ranking',
        key: 'ranking',
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

export default class Appointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: [],
            departments: [],
        }
    }

    componentDidMount() {
        getAppointments(1, (data) => {
            data.forEach((item) => {
                item.time = MngOrAftn(item.time);
            })
            this.setState({record: data})
        });

        getDepartments({search: null}, (data) => {
            this.setState({departments: data})
        });
    }

    options = () => {
        return this.state.departments.map((item, idx) => {
            return {
                value: item.title,
                label: item.title,
                children: item.doctors.map((doc) => {
                    return {
                        value: doc.name,
                        label: doc.name,
                    }
                })
            }
        })
    }

    render() {
        console.log(this.state.departments)
        return (
            <div>
                <Divider />
                <Form layout="inline">
                    <Form.Item label="预约日期">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="预约时间">
                        <TimePicker.RangePicker />
                    </Form.Item>
                    <Form.Item label="预约科室与医生">
                        <Cascader options={this.options()} style={{width: '150px'}} />
                    </Form.Item>
                    <Button type="primary">
                        我要挂号
                    </Button>
                </Form>

                <Divider />
                <Table
                    columns={columns}
                    dataSource={this.state.record}
                    pagination={
                        {pageSize: 5}
                    }
                />
            </div>
        );
    }

}

// function Appointment() {
//
//     const [record, setRecord] = useState(appointment);
//
//     const columns = [
//         {
//             title: '挂号记录',
//             dataIndex: 'ranking',
//             key: 'ranking',
//         },
//         {
//             title: '预约日期',
//             dataIndex: 'date',
//             key: 'date',
//         },
//         {
//             title: '预约时间',
//             dataIndex: 'time',
//             key: 'time',
//         },
//         {
//             title: '预约科室',
//             dataIndex: 'department',
//             key: 'department',
//         },
//         {
//             title: '预约医生',
//             dataIndex: 'doctor',
//             key: 'doctor',
//         },
//     ];
//
//     const handleDelete = (key) => {
//         let oldRecord = [...record];
//         setRecord(oldRecord.filter((item) => item.key !== key));
//     }
//
//     const FormItem = Form.Item;
//
//     const options = [
//         {
//             value: '儿科',
//             label: '儿科',
//             children: [
//                 {value: 'Doctor A', label: 'Doctor A'},
//                 {value: 'Doctor B', label: 'Doctor B'},
//                 {value: 'Doctor C', label: 'Doctor C'},
//             ]
//         },
//         {
//             value: '内科',
//             label: '内科',
//             children: [
//                 {value: 'Doctor D', label: 'Doctor D'},
//                 {value: 'Doctor E', label: 'Doctor E'},
//                 {value: 'Doctor F', label: 'Doctor F'},
//             ]
//         },
//     ];
//
//     return (
//         <div>
//
//
//             <Divider />
//
//             <Form layout="inline">
//                 <FormItem label="预约日期">
//                     <DatePicker />
//                 </FormItem>
//                 <FormItem label="预约时间">
//                     <TimePicker.RangePicker />
//                 </FormItem>
//                 <FormItem label="预约科室与医生">
//                     <Cascader options={options} style={{width: '150px'}} />
//                 </FormItem>
//                 <Button type="primary">
//                     我要挂号
//                 </Button>
//             </Form>
//
//             <Divider />
//             <Table
//                 columns={columns}
//                 dataSource={record}
//                 pagination={
//                     {pageSize: 5}
//                 }
//             />
//         </div>
//     );
// }
//
// export default Appointment;
<<<<<<< HEAD
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
