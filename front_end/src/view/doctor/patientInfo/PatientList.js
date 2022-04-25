import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {getPatients} from "../../../services/AdminService";
import {List} from "antd";

export default function PatientList () {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const callback = (data) => {
            setPatients(data);
        }
        getPatients(callback);

        // 医生只能看到自己病人的信息
        setPatients((allPatients) => {
            return allPatients.filter((patient) =>
                patient.doctor === "Doctor A"
            );
        })

        patients.map(item => {
            if (localStorage.getItem(item.id) === null) {
                item.steps = '1';
                let cur_patient = JSON.stringify(item);
                localStorage.setItem(item.id, cur_patient);
            }
            else {
                let jsonString = localStorage.getItem(item.id);
                let cur_patient = JSON.parse(jsonString);
                item.steps = cur_patient.steps;
            }
            console.log(item);
        })
    }, [])

    const navigate = useNavigate();

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
                            title={item.id + " : " + item.name}
                            description={"age: " + item.age + " gender: " + item.gender}
                        />
                    </List.Item>
            )}
            />
        </div>
    )
}
