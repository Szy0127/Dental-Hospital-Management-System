import { postRequest,postRequest_v2 } from "../utils/ajax";
import { message } from 'antd';
import { userlist } from '../utils/data';
import sha256 from 'crypto-js/sha256';

const root = "http://10.119.10.57:8080";
// const root = "http://localhost:8080";

const nonce = "12345";

export const login = (data,callback) => {
    const url = root + `/login`;
    console.log(data);
    data['password'] = sha256(data['password'] + nonce.toString()).toString();
    postRequest_v2(url, data, callback);
}

export const logout = () => {
    const url = root + `/logout`;

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
    postRequest_v2(url,null, callback);
    return true;
};

export const register = (data,callback) => {
    const url = root + "/register";
    data['password'] = sha256(data['password'] + nonce.toString()).toString();
    console.log(data);    
    postRequest_v2(url, data, callback);
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
