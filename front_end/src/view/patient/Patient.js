import React from 'react'
import {Descriptions} from "antd";
import {getUser, MaleOrFemale} from "../../services/DataSurvice";


export default class Patient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        }
    }

    componentDidMount() {
        getUser(1, (data) => {this.setState({user: data})});
    }

    render() {
        console.log(this.state.user)
        return (
            <div>
                <Descriptions
                    title="用户信息"
                    bordered
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                    <Descriptions.Item label="姓名">{this.state.user.name}</Descriptions.Item>
                    <Descriptions.Item label="性别">{MaleOrFemale(this.state.user.gender)}</Descriptions.Item>
                    <Descriptions.Item label='编号'>{this.state.user.id}</Descriptions.Item>
                    <Descriptions.Item label="年龄">{this.state.user.age}</Descriptions.Item>
                    <Descriptions.Item label="邮箱地址">{this.state.user.email}</Descriptions.Item>
                    <Descriptions.Item label="电话号码">{this.state.user.phone}</Descriptions.Item>
                    <Descriptions.Item label="账号名称">{this.state.user.account}
                    </Descriptions.Item>
                </Descriptions>
            </div>
        );
    }

}
// export default function Patient() {
//   return (
//     <div>
//         <Descriptions
//             title="用户信息"
//             bordered
//             column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
//         >
//             <Descriptions.Item label="姓名">{user.name}</Descriptions.Item>
//             <Descriptions.Item label="性别">{user.gender}</Descriptions.Item>
//             <Descriptions.Item label='编号'>{user.id}</Descriptions.Item>
//             <Descriptions.Item label="年龄">{user.age}</Descriptions.Item>
//             <Descriptions.Item label="邮箱地址">{user.email}</Descriptions.Item>
//             <Descriptions.Item label="电话号码">{user.number}</Descriptions.Item>
//             <Descriptions.Item label="账号名称">{user.account}
//             </Descriptions.Item>
//         </Descriptions>
//     </div>
//   )
// }
