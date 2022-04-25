import config from 'config';
import { postRequest } from "../utils/ajax";
import { message } from 'antd';

export const login = (form) => {
    const url = `${config.apiUrl}/login`;
    const callback = (data) => {
        console.log(data);
        if (data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            localStorage.setItem('identity');
            if (form.identity === "patient") {
                localStorage.setItem('patientID',data.patientID);
            }
            // history.push("/");
            message.success(data.msg);
        }
        else {
            message.error(data.msg);
        }
    };
    postRequest(url, form, callback);
import {postRequest} from "../utils/ajax";
import {message} from 'antd';

export const login = (data) => {
    const url = `${config.apiUrl}/login`;
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            // history.push("/");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const logout = () => {
    const url = `${config.apiUrl}/logout`;

    const callback = (data) => {
        if (data.status >= 0) {
        if(data.status >= 0) {
            localStorage.removeItem("user");
            // history.push("/login");
            message.success(data.msg);
        }
		else{
            message.error(data.msg);
        }
    };
    postRequest(url, {}, callback);
};

export const register = (data) => {
    const url = `${config.apiUrl}/register`;
    const callback = (data) => {
        console.log(data);
        if (data.status >= 0) {
            message.success(data.msg);
        }
        else {
            message.error(data.msg);
        }
    }
    postRequest(url, {}, callback);
}

export const checkSession = (callback) => {
    const url = `${config.apiUrl}/checkSession`;
    postRequest(url, {}, callback);
};
