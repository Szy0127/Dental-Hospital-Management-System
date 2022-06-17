import React, { Component } from 'react'
import { Table, Button, Space, Popconfirm, Typography, Modal } from 'antd'
import { render } from '@testing-library/react'
import Doctor from '../doctor/Doctor';
import { getDepartments, getDoctors } from '../../services/DataSurvice';
import ModalForm from '../../components/modelform/ModelForm'
import { addDoctor, delDoctor, editDoctor } from '../../services/AdminService';
import { data } from '../../utils/data';

export default class Admin extends Component {
    constructor(props) {
        super(props)
        this.columns = [
            {
                title: '',
                dataIndex: 'avatar',
                key: 'avatar',
                render: text => <img src={text} />,
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '编号',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '科室编号',
                key: 'deptId',
                dataIndex: 'deptId',
            },
            {
                title: '职位',
                key: 'post',
                dataIndex: 'post',
            },
            {
                title: 'EDIT',
                key: 'edit',
                render: (_, record) => (
                    <Space size="middle">
                        <Popconfirm title="是否要编辑该医生资料" onConfirm={() => this.handleEdit(record)}>
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
                        <Popconfirm title="是否要删除该医生资料" onConfirm={() => this.handleDelete(record.id)}>
                            <Button>删除</Button>
                        </Popconfirm>
                    </Space>
                ),
            },
        ];
        this.form = React.createRef();
        this.state = {
            doctor: [],
            ShowModal: false,
            ModalType: "",
            EditingDoc: {},
        }
    }
    handleDelete = (key) => {
        // const dataSource = [...this.state.doctor];
        delDoctor(key,(item)=>{
            getDoctors(1, (data) => {
                console.log(data);
                this.setState({ doctor: data });
            })
        });
    }
    handleAdd = () => {
        let data = {
            id: "", avatar: "", name: "", gender: "", department: "",
            age: "", gender: "", intro: "", post: "", username: "",
            password: ""
        };
        this.setState({
            ShowModal: true,
            Comfirming: false,
            TableKey: 1,
            ModalType: "添加医生",
            EditingDoc: data
        }, () => {
            this.form.current.btnref.current.setFieldsValue(data);
        });
    }
    handleEdit = (data) => {
        console.log(data);
        this.setState({
            ShowModal: true,
            ModalType: "编辑医生",
            EditingDoc: data
        }, () => {
            this.form.current.btnref.current.setFieldsValue(data);
        })
        console.log(this.state.EditingDoc);
    }
    handleOK = () => {
        console.log(this.form.current.btnref.current.getFieldsValue());
        let doctor = this.form.current.btnref.current.getFieldsValue();
        this.setState({ Comfirming: true });
        if (this.state.ModalType === "添加医生") {
            console.log("IN ADD");
            addDoctor(doctor, (a) => {
                // let doctors = { ...this.state.doctor, ...data }
                // console.log(doctors);
                // this.setState({ doctor: doctors, TableKey: this.state.TableKey + 1 });
                getDoctors(1, (data) => {
                    console.log(data);
                    this.setState({ doctor: data });
                })
            });
        }
        else if (this.state.ModalType === "编辑医生") {
            console.log("In EDIT");
            editDoctor(this.state.EditingDoc.id, doctor,(data)=>{
                getDoctors(1, (data) => {
                    console.log(data);
                    this.setState({ doctor: data });
                })
            });
        }
        setTimeout(() => {
            this.setState({
                ShowModal: false,
                Comfirming: false
            })
        }, 1000);
    }
    clickbtn = (id) => {
        getDoctors(id, (data) => {
            console.log(data);
            this.setState({ doctor: data });
        })
    }
    componentDidMount() {
        console.log("Management");
        // getDepartments(null,(data) => {
        //     console.log(data);
        //     var doctor = data.map(item=>{
        //         return {...item.doctors};
        //     })
        //     console.log(doctor)
        //     this.setState({doctor:data});

        // })
        getDoctors(1, (data) => {
            console.log(data);
            this.setState({ doctor: data });
        })
    }
    render() {
        return (
            <div>
                <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    Add Doctor
                </Button>
                <Table
                    key={this.state.TableKey}
                    dataSource={this.state.doctor}
                    columns={this.columns}
                    pagination={
                        {
                            pageSize: 8
                        }
                    }
                />
                <Modal
                    title={this.state.ModalType}
                    visible={this.state.ShowModal}
                    onCancel={() => { this.setState({ ShowModal: false }) }}
                    onOk={this.handleOK}
                    confirmLoading={this.state.Comfirming}
                >
                    <ModalForm item={this.state.EditingDoc} ref={this.form} />
                </Modal>
            </div>
        )
    }
}
