import React, {useState} from "react";
import PatientConsult from "./PatientConsult";
import {useLocation} from "react-router-dom";
import {Button, Descriptions, Divider, Input, message} from "antd";

const { TextArea } = Input;

export default function PatientInfo () {

    const location = useLocation();
    // const {state} = location;
    const [{state}, setState] = useState(location)
    // let patient = state.patient;
    const [patient, setPatient] = useState(state.patient)

    const handleClick = () => {
        console.log("已完成药方的编辑！")
        message.success("已完成药方的编辑！")
    }

    return (
        <div>
            <PatientConsult step={patient.step} />

            <Descriptions
                title="患者信息"
                bordered
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
                <Descriptions.Item label="姓名">{patient.name}</Descriptions.Item>
                <Descriptions.Item label="性别">{patient.gender}</Descriptions.Item>
                <Descriptions.Item label='编号'>{patient.id}</Descriptions.Item>
                <Descriptions.Item label="年龄">{patient.age}</Descriptions.Item>
                <Descriptions.Item label="主治医生">{patient.doctor}</Descriptions.Item>
                <Descriptions.Item label="病情描述">{patient.disease}</Descriptions.Item>
                <Descriptions.Item label="开出药方">{patient.medicine}
                </Descriptions.Item>
            </Descriptions>

            <Divider />

            <TextArea showCount style={{ height: 200,width:600 }} defaultValue = {patient.medicine}
                onChange={(event) => {
                    setPatient({...patient, medicine: event.target.value})
                }}
            />
            <Button type='primary' onClick={handleClick}>上传药方</Button>

        </div>
    )
}
