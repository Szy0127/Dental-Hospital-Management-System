import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Col, Row, Statistic, Form, Input, Popconfirm, Table, InputNumber, Space } from 'antd';
import { getDepartments } from '../../services/DataSurvice';
import { data } from '../../utils/data';
import { addDept, getConstant, modifyConstant, saveDept } from '../../services/AdminService';

const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

export default function Param() {
    const [dataSource, setDataSource] = useState([
    ]);
    const [formdata, setFormdata] = useState({});
    const [count, setCount] = useState(2);
    useEffect(() => {
        getDepartments(null, (data) => {
            console.log(data);
            setDataSource(data);
        })
        getConstant((data) => {
            console.log(data);
            setFormdata(data);
            console.log(formdata);
        })
    }, [])

    const defaultColumns = [
        {
            title: 'id',
            dataIndex: 'id',
            // width: '30%',
        },
        {
            title: 'title',
            dataIndex: 'title',
            editable: true,
        },
    ];

    const handleAdd = () => {
        const newData = {
            title: "科诊名称"
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
        addDept(newData, (item) => {
            getDepartments(null, (data) => {
                setDataSource(data);
            })
        })
    };

    const handleSave = (row) => {
        console.log(row)
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataSource(newData);
        saveDept(row, () => { })
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });
    const onFinish = (values) => {
        modifyConstant(values, (data) => {
            setFormdata(data);
        })
    }
    return (
        <div>
                <Form
                    className='constantForm'
                    initialValues={formdata}
                    onFinish={onFinish}>
                    <Form.Item name="morningMax"
                        label="上午最大挂号人数"
                        initialValue={formdata.morningMax}
                    >
                        <InputNumber
                        />
                    </Form.Item>
                    <Form.Item name="afternoonMax"
                        label="下午最大挂号人数"
                        initialValue={formdata.afternoonMax}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="punishCount"
                        label="挂号退号禁用"
                        initialValue={formdata.punishCount}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="punishDuration"
                        label="禁用时间"
                        initialValue={formdata.punishDuration}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >
                            修改
                        </Button>
                    </Form.Item>
                </Form>
            <div>
                <Space>
                    诊所科室
                </Space>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        </div>
    )
}
