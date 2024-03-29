import { List } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getNews, getNotifications } from '../../../services/DataSurvice';

export default function NewsEditList(props) {
    const [info, setInfo] = useState();
    const navigate = useNavigate();
    const {type} = props;
    useEffect(() => {
        const callback = (data) => {
            setInfo(data);
        }
        if(type === "notice"){
            getNotifications(callback);
        }
        else{
            getNews(callback)
        }
    }, []);

    const handleEdit = (item) => {
        navigate('/administer/infoedit', {
            state: {
                type:type,
                info:item,
            }
        });
    }
    const handleDelete = (item) => {
        
    }
    return (
        <div>
            <List
                dataSource={info}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 8,
                }}

                renderItem={item => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit" onClick={() => {
                            handleEdit(item);
                        }}>编辑</a>, <a key="list-loadmore-more" onClick={
                            () => {
                                handleDelete(item);
                            }
                        }>删除</a>]}>
                        <List.Item.Meta
                            title={<a onClick={() => {
                                navigate('/info/' + info.type + '/' + '?id=' + info.id)
                            }}>{item.title}</a>}
                            description={item.date}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}
