import React from 'react'
import { Table, Tag, Space } from 'antd';

<<<<<<< HEAD
<<<<<<< HEAD
export default function apointInfo() {
  return (
    <div>apointInfo</div>
=======
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
const columns = [
  { title: '挂号诊所', dataIndex: 'client', key: 'client' },
  { title: '挂号医生', dataIndex: 'doctor', key: 'doctor' },
  { title: '挂号时间', dataIndex: 'time', key: 'time' },
  {
    title: '退号',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];


const data = [
  {
    key: 1,
    client: 'A',
    doctor: "黄医生",
    time:"2022-3-11 7:10"
  },
  {
    key: 2,
    client: 'B',
    doctor: "陆医生",
    time:"2022-3-12 15:23"
  },
  {
    key: 3,
    client: 'A',
    doctor: "卢医生",
    time:"2022-3-14 10:26"
  },
  {
    key: 4,
    client: 'B',
    doctor: "沈医生",
    time:"2022-3-15 9:10"
  },
];

export default function ApointInfo() {
  return (
    <Table
    columns={columns}
    dataSource={data}
  />
<<<<<<< HEAD
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
=======
>>>>>>> ad5278e7ec96ace86308176a467d2a65f63f0b24
  )
}
