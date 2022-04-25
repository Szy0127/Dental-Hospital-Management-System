import React from 'react'
import { List, Avatar } from 'antd';
import {Link, useLocation} from "react-router-dom";
import {getDoctors} from "../../../services/DataSurvice";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: [],
        }
    }

    componentDidMount() {
        getDoctors(this.props.deptID, (data) => {this.setState({doctor: data})});
        console.log(this.props.deptID)
    }

    render() {
        console.log(this.state.doctor)
        return (
            <List
                itemLayout="horizontal"
                dataSource={this.state.doctor}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<Link to={`/doctor/detailedInfo/?id=${item.id}`} >
                                {item.name}
                            </Link>}
                            description="医生简短简介 点击进入可查看详情"
                        />
                    </List.Item>
                )}
            />
        );
    }
}

export default function Profilelist() {
    let location = useLocation();
    const query = location.search;
    const arr = query.split('&');
    const id = arr[0].substr(4);

    return <Profile deptID={id}/>
}
