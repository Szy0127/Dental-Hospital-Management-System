import { postRequest } from "../utils/ajax";
import { message } from 'antd';
import { userlist } from '../utils/data';

export const login = (form) => {
    // const url = `${config.apiUrl}/login`;
    console.log(form);
    const callback = (data) => {
        console.log();
        console.log(form.identity);
        let i = data.findIndex((item) => (form.identity === item.identity
            && form.username === item.username
            && form.password === item.password));
        if(i === -1){
            message.error("登陆失败")
            return false;
        }
        else{
            message.success("登陆成功")
            localStorage.setItem("identity",data[i].identity);
            if(data[i].identity === "patient"){
                console.log("suc");
                localStorage.setItem("patientID",data[i].id);
            }
            else if(data[i].identity === "doctor"){
                localStorage.setItem("doctorID",data[i].id);
            }
            else{
                localStorage.setItem("adminID",data[i].id);
            }
            return true;
        }
    };
    return callback(userlist);
    // postRequest(url, form, callback);
}

export const logout = () => {
    // const url = `${config.apiUrl}/logout`;

    const callback = (data) => {
        if (data.status >= 0) {
            if (data.status >= 0) {
                localStorage.removeItem("identity");
                // history.push("/login");
                message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        }
    }
    localStorage.removeItem("identity");
    return true;
    // postRequest(url, {}, callback);
};

export const register = (data) => {
    
    // const url = `${config.apiUrl}/register`;
    // postRequest(url, {}, callback);
};


export const checkSession = (callback) => {
    // const url = `${config.apiUrl}/checkSession`;
    // postRequest(url, {}, callback);
    let data = {state:0,identity:null};
    let identity = localStorage.getItem("identity");
    if(identity !== null){
        data.identity = identity;
        data.state = 1;
    }
    callback(data);
};
