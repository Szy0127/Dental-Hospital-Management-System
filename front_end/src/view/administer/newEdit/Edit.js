import React from 'react'
import { Button, Input } from 'antd';
import { useLocation } from 'react-router-dom';

const { TextArea } = Input;
export default function Edit() {
    const location = useLocation();
    const {state} = location;
    if(state == null){
        console.log("error!");
    }
    console.log(state);
    const handleEdit = () =>{

    }
    var info = state.info;
    return (
        <div>
            <TextArea showCount style={{ height: 300,width:300 }} defaultValue = {info.content}/>
            <Button onClick={handleEdit}>上传</Button>
        </div>
    )
}
