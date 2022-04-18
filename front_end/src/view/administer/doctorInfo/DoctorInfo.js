import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import InfoDisplay from '../../../components/infoDisplay/InfoDisplay';
import { getDoctor } from '../../../services/AdminService';
import Schedule from '../../../components/schedule/Schedule';
import { Descriptions, Divider, Image } from 'antd';

export default function DoctorInfo() {
  const [doctor, setDoctor] = useState({});
  const [schedule, getSchedule] = useState();
  const location = useLocation();
  const { state } = location;
  const id = state.key;
  console.log(state)
  useEffect(
    () => {
      const callback = (data) => {
        setDoctor(data);
      }
      getDoctor(id,callback);
      console.log(doctor);
    }
  );
  return (
    <div>
      <Image
        width={350}
        src={doctor.avatar}
        id='avatar'
      />

      <Descriptions
        title="医生信息"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="姓名">{doctor.title}</Descriptions.Item>
        <Descriptions.Item label="性别">{doctor.gender}</Descriptions.Item>
        <Descriptions.Item label='编号'>{doctor.id}</Descriptions.Item>
        <Descriptions.Item label="所在科室">{doctor.belong}</Descriptions.Item>
        <Descriptions.Item label="年龄">{doctor.age}</Descriptions.Item>
        <Descriptions.Item label="职位">{doctor.position}</Descriptions.Item>
        <Descriptions.Item label="个人背景">
          {doctor.info}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Schedule id={id} />
    </div>
  )
}
