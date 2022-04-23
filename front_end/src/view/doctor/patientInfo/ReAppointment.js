import React from "react";
import {Button, Cascader, Divider, Form, Input, TimePicker} from "antd";
import {DatePicker} from "antd/es";

const { TextArea } = Input;
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

export default function ReAppointment() {

    const handleClick = () => {

    }

    return (
        <div>
            <h1>请给出办理转诊原因：</h1>

            <TextArea showCount style={{ height: 200,width:600 }} />

            <h1>请给出推荐的时间以及主治医生：</h1>

            <Form layout="inline">
                <FormItem label="转诊日期">
                    <DatePicker />
                </FormItem>
                <FormItem label="转诊时间">
                    <TimePicker.RangePicker />
                </FormItem>
                <FormItem label="转诊科室与医生">
                    <Cascader options={options} style={{width: '150px'}} />
                </FormItem>
            </Form>

            <Divider />

            <Button type='primary' onClick={handleClick}>告诉患者</Button>
        </div>
    )
}
