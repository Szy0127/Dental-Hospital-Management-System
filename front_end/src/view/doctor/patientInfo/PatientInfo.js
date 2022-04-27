import React, {useEffect, useState} from "react";
import PatientConsult from "./PatientConsult";
import {useLocation} from "react-router-dom";
import {Button, Descriptions, Divider, Input, message, Table} from "antd";
import {history} from "../../../utils/data";
import moment from 'moment';
import {getHistories, getPatientsByID} from "../../../services/DataSurvice";
import { Steps } from 'antd';

const { Step } = Steps;

const { TextArea } = Input;

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

export default function PatientInfo () {

    const location = useLocation();
    const {state} = location;
    const [patient, setPatient] = useState(state.patient);

    const [desc, setDescription] = useState({});

    useEffect(() => {
        // 找到当天的就诊记录
        let curDate = new Date();
        let date = curDate.getFullYear() + '-' + (curDate.getMonth()+1) + '-' + curDate.getDate();
        console.log(date);
        const callback = (data) => {
            setPatient(data);
        }
        const callback2 = (data) => {
            console.log(data)
            let res = data.find((item) => {
                return item.time === moment().format('YYYY-MM-DD');
            })
            setDescription(JSON.parse(res.description));
        }
        getPatientsByID(patient.patientID, callback);
        getHistories(patient.patientID, callback2);
    }, [])

    console.log("history ===============")
    console.log(history)

    const handleClick = () => {
        console.log("已完成药方的编辑！")
        message.success("已完成药方的编辑！")
    }

    const [step, setStep] = useState(0);

    const handleClick1 = () => {

        let tmp = step;
        setStep(tmp + 1);
    }

    const handleClick3 = () => {
        // 将所有记录传至后端

    }

    return (
        <div>

            <h2>治疗流程图</h2>

            <Steps direction="horizontal" current={step}>
                <Step title="初诊" description={desc.commentA} />
                <Step title="复诊" description={desc.commentB} />
                <Step title="完成诊断" description={desc.commentC} />
            </Steps>

            <Divider />

            <TextArea showCount style={{ height: 200,width:600 }}
                      onChange={(event) => {
                          if (step === 0) {
                            setDescription({...desc, commentA: event.target.value})
                          }
                          else if (step === 1){
                              setDescription({...desc, commentB: event.target.value})
                          }
                          else{
                              setDescription({...desc, commentC: event.target.value})
                          }
                      }}
            />
            <Button type='primary' onClick={handleClick1}>下一阶段</Button>

            <Divider />

            <Descriptions
                title="患者信息"
                bordered
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
                <Descriptions.Item label="姓名">{patient.name}</Descriptions.Item>
                <Descriptions.Item label="性别">{patient.gender === 'm'? '男':'女'}</Descriptions.Item>
                <Descriptions.Item label='编号'>{patient.id}</Descriptions.Item>
                <Descriptions.Item label="年龄">{patient.age}</Descriptions.Item>
                <Descriptions.Item label="联系方式">{patient.email}</Descriptions.Item>
                <Descriptions.Item label="病情描述">{desc.disease}</Descriptions.Item>
                <Descriptions.Item label="开出药方">{desc.medicine}
                </Descriptions.Item>
            </Descriptions>

            <Divider />

            <TextArea showCount style={{ height: 200,width:600 }} defaultValue = {desc.medicine}
                onChange={(event) => {
                    setDescription({...desc, medicine: event.target.value})
                }}
            />
            <Button type='primary' onClick={handleClick}>上传药方</Button>

            <Divider />

            {/*<h1>就诊记录：</h1>*/}

            {/*<Table columns={columns} dataSource={history} />*/}

            <Button type='primary' block size='large' onClick={handleClick3}>完成并提交</Button>

            <Divider />

        </div>
    )
}
