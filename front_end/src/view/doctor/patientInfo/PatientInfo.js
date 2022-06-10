import React, {useEffect, useState} from "react";
import PatientConsult from "./PatientConsult";
import {useLocation} from "react-router-dom";
import {Button, Descriptions, Divider, Input, message, Table} from "antd";
import {history} from "../../../utils/data";
import moment from 'moment';
import {addHistory, getHistories, getPatientsByID, updateDescriptionOfHistory} from "../../../services/DataSurvice";
import { Steps } from 'antd';

const { Step } = Steps;

const { TextArea } = Input;

export default function PatientInfo () {

    const location = useLocation();
    const {state} = location;
    const [patient, setPatient] = useState(state.patient);

    const [desc, setDescription] = useState({});

    useEffect(() => {
        const callback = (data) => {
            setPatient(data);
        }
        const callback2 = (data) => {
            let res = data.find((item) => {
                return item.time === moment().format('YYYY-MM-DD');
            })
            setDescription(JSON.parse(res.description));
        }
        getPatientsByID(patient.patientID, callback);
        getHistories(patient.patientID, callback2);
    }, [])

    console.log("Description Object")
    console.log(desc)

    const handleClick = () => {
        console.log("已完成药方的编辑！")
        message.success("已完成药方的编辑！")
    }

    const handleClick4 = () => {
        message.success("已完成病情的诊断！")
    }

    const [step, setStep] = useState(0);

    const handleClick1 = () => {

        let tmp = step;
        setStep(tmp + 1);

        setArea('')
    }

    const handleClick3 = () => {
        // 将所有记录传至后端
        message.success("信息已存储")
        let jsonString = JSON.stringify(desc);
        updateDescriptionOfHistory(patient.id, moment().format('YYYY-MM-DD'), jsonString)
    }

    console.log(patient)

    const [area, setArea] = useState('');

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
                      value={area}
                      onChange={(event) => {
                          setArea(event.target.value);
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
            <Button type='primary' onClick={handleClick1}>{step >= 2? '完成诊断':'下一阶段'}</Button>

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
                          setDescription({...desc, disease: event.target.value})
                      }}
            />
            <Button type='primary' onClick={handleClick4}>确定病情</Button>

            <Divider />

            <TextArea showCount style={{ height: 200,width:600 }} defaultValue = {desc.medicine}
                onChange={(event) => {
                    setDescription({...desc, medicine: event.target.value})
                }}
            />
            <Button type='primary' onClick={handleClick}>上传药方</Button>

            <Divider />

            <Button type='primary' block size='large' onClick={handleClick3}>完成并提交</Button>

            <Divider />

        </div>
    )
}