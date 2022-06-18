import React, {useEffect, useState} from "react";
import PatientConsult from "./PatientConsult";
import {useLocation} from "react-router-dom";
import {Button, Descriptions, Divider, Input, message, Table} from "antd";
import {history} from "../../../utils/data";
import moment from 'moment';
import {
    addHistory,
    discardAppointment,
    getHistories,
    getPatientsByID, modifyDesc,
    updateDescriptionOfHistory
} from "../../../services/DataSurvice";
import { Steps } from 'antd';

const { Step } = Steps;

const { TextArea } = Input;

export default function PatientInfo () {

    const location = useLocation();
    const {state} = location;
    const [patient, setPatient] = useState(state.patient);

    const [desc, setDescription] = useState({});

    const [comment, setComment] = useState([]);

    const [info, setInfo] = useState({});

    useEffect(() => {

        console.log(patient)
        console.log(patient.description)
        setDescription(JSON.parse(patient.description))
        console.log(desc)
        setComment([desc.commentA, desc.commentB, desc.commentC, desc.commentD, desc.commentE])

        getPatientsByID(patient.patientID, (data)=>{
            console.log(data)
            setInfo(data)
        })

    }, [])

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

        if (step >= 5)
            message.warn("注意！不可继续添加诊断流程！")

        setDescription({...desc, commentA: comment[0], commentB: comment[1], commentC: comment[2], commentD: comment[3], commentE: comment[4]})
        console.log(desc)
    }

    const handleClick3 = () => {
        // 将所有记录传至后端
        message.success("信息已存储")
        let jsonString = JSON.stringify(desc);

        // message.success(jsonString)

        modifyDesc(patient.ranking, patient.patientID, patient.deptID, patient.doctorID, patient.date, patient.time, jsonString);

        // updateDescriptionOfHistory(patient.id, moment().format('YYYY-MM-DD'), jsonString)
    }

    console.log(desc)

    const [area, setArea] = useState('');

    const click = () => {
        message.warn("已取消该病人挂号就诊！")
        discardAppointment(patient.patientID)
    }

    return (
        <div>

            <h2>治疗流程图</h2>

            <Divider />

            <Button type='primary' onClick={click} style={{width: 800, height: 50, marginLeft: 150}}>病人未到</Button>

            <Divider />

            <Steps direction="horizontal" current={step}>
                <Step title="开始诊疗" description={""} />
                {
                    comment.map((item) => {
                        console.log(item)
                        if (item !== undefined) {
                            return (
                                <Step title="诊疗阶段" description={item} />
                            )
                        }
                    })
                }
            </Steps>

            <Divider />

            <TextArea showCount style={{ height: 200,width:600 }}
                      value={area}
                      onChange={(event) => {
                          setArea(event.target.value);
                          if (step === 0) {
                              setComment([event.target.value, comment[1], comment[2], comment[3], comment[4]])
                            // setDescription({...desc, commentA: event.target.value})
                          }
                          else if (step === 1){
                              // setDescription({...desc, commentB: event.target.value})
                              setComment([comment[0], event.target.value, comment[2], comment[3], comment[4]])
                          }
                          else if (step === 2){
                              // setDescription({...desc, commentB: event.target.value})
                              setComment([comment[0], comment[1], event.target.value, comment[3], comment[4]])
                          }
                          else if (step === 3){
                              // setDescription({...desc, commentB: event.target.value})
                              setComment([comment[0], comment[1], comment[2], event.target.value, comment[4]])
                          }
                          else if (step === 4){
                              // setDescription({...desc, commentB: event.target.value})
                              setComment([comment[0], comment[1], comment[2], comment[3], event.target.value])
                          }
                      }}
            />
            <Button type='primary' onClick={handleClick1}>{step < 5? '增加诊疗阶段':'不可继续增加'}</Button>

            <Divider />

            <Descriptions
                title="患者信息"
                bordered
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
                <Descriptions.Item label="姓名">{info.name}</Descriptions.Item>
                <Descriptions.Item label="性别">{info.gender === 'm'? '男':'女'}</Descriptions.Item>
                <Descriptions.Item label='编号'>{info.id}</Descriptions.Item>
                <Descriptions.Item label="年龄">{info.age}</Descriptions.Item>
                <Descriptions.Item label="联系方式">{info.email}</Descriptions.Item>
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
