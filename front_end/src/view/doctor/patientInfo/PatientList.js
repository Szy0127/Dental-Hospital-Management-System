import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {List} from "antd";
import {addHistory, getAppointmentsByDocID} from "../../../services/DataSurvice";

export default function PatientList () {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const callback = (data) => {
            console.log()
            setPatients(data);
        }
        let jsonString = localStorage.getItem("doctorID");
        let cur_doctor = JSON.parse(jsonString);
        getAppointmentsByDocID(cur_doctor, callback);
    }, [])

    const navigate = useNavigate();

    patients.map(item => {
        if (localStorage.getItem(item.patientID) === null) {
            item.steps = '1';
            let cur_patient = JSON.stringify(item);
            localStorage.setItem(item.patientID, cur_patient);
        }
        else {
            let jsonString = localStorage.getItem(item.patientID);
            let cur_patient = JSON.parse(jsonString);
            item.steps = cur_patient.steps;
        }
    })

    return (
        <div>
            <List
                dataSource={patients}
                pagination={{pageSize: 8}}

                renderItem={item => (
                    <List.Item
                        actions={[
                            <a onClick={() => {
                                navigate('/doctor/patientinfo', {
                                    state: {patient: item}
                                })
                            }}>
                                查看患者具体信息
                            </a>
                    ]}>
                        <List.Item.Meta
                            title={"Patient ID: " + item.patientID}
                            description={"Date: " + item.date + (item.time === 'm' ? " Morning" : " Afternoon")
                                + " Ranking: " + item.ranking}
                        />
                    </List.Item>
            )}
            />
        </div>
    )
}
