import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Popconfirm, message } from 'antd';
import { data } from '../doctor/profilelist/Profilelist';
import Doctor from '../doctor/Doctor';
import { getDoctors } from '../../services/AdminService';
import { useNavigate } from 'react-router-dom';

export default function Management() {
    const [doctor, setDoctor] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const callback = (data) => {
            setDoctor(data);
        }
        getDoctors(callback);
    }, []
    );

    const columns = [
        {
            title: '',
            dataIndex: 'avatar',
            key: 'avatar',
            render: text => <img src={text} />,
        },
        {
            title: '姓名',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '编号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '科室',
            key: 'belong',
            dataIndex: 'belong',
        },
        {
            title: '职位',
            key: 'position',
            dataIndex: 'position',
        },
        {
            title: 'EDIT',
            key: 'edit',
            render: (_, record) => (
                <Space size="middle">
                    <Popconfirm title="是否要编辑该医生资料" onConfirm={() => handleEdit(record.id)}>
                        <Button>编辑</Button>
                    </Popconfirm>
                </Space>
            ),
        },
        {
            title: 'REMOVE',
            key: 'remove',
            render: (_, record) => (
                <Space size="middle">
                    <Popconfirm title="是否要删除该医生资料" onConfirm={() => handleDelete(record.id)}>
                        <Button>删除</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const handleDelete = (key) => {
        var dataSource = [...doctor];
        setDoctor(dataSource.filter((item) => item.key !== key));
        // DELETE_DOCTOR(key);
    }
    const handleEdit = (key) => {
        console.log(key)
        navigate('/administer/doctorInfo', {
            state: {
                identity: "Admin",
                type: 'EDIT',
                key: key
            }
        });
    }

    const handleAdd = () => {
        console.log("add");
    }

    return (
        <div>
            <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
                Add Doctor
            </Button>
            <Table
                columns={columns}
                dataSource={doctor}
                pagination={
                    {
                        pageSize: 8
                    }
                }
            />
        </div>
    )
}
