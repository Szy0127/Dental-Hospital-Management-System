import React from 'react'
import {useLocation} from "react-router-dom";
import {Descriptions, Divider, Image} from "antd";
import '../style1.css'
import {getDoctor, getDeptOnly, MaleOrFemale} from "../../../services/DataSurvice";

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    componentDidMount() {
        getDoctor(this.props.id, (data) => {
            this.setState({data: data});
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                <Image
                    width={350}
                    src={this.state.data.avatar}
                    id='avatar'
                />

                <Descriptions
                    title="医生信息"
                    bordered
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                    <Descriptions.Item label="姓名">{this.state.data.name}</Descriptions.Item>
                    <Descriptions.Item label="性别">{MaleOrFemale(this.state.data.gender)}</Descriptions.Item>
                    <Descriptions.Item label='编号'>{this.state.data.id}</Descriptions.Item>
                    <Descriptions.Item label="所在科室">{this.state.data.department}</Descriptions.Item>
                    <Descriptions.Item label="年龄">{this.state.data.age}</Descriptions.Item>
                    <Descriptions.Item label="职位">{this.state.data.post}</Descriptions.Item>
                    <Descriptions.Item label="个人背景">
                        {this.state.data.intro}
                    </Descriptions.Item>
                </Descriptions>

                <Divider />
            </div>
        );
    }

}

export default function DetailedInfo() {

    let location = useLocation();
    const query = location.search;
    const arr = query.split('&');
    const id = arr[0].substr(4);

    return <Info id={id}/>
}
