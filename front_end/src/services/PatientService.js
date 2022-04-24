import { message } from "antd";
import { postRequest } from "../utils/ajax";

const MorningAppoint = 30;
const AfternoonAppoint = 40; 

const getPredictedTime = (time,ranking) =>{
    let h,m,dur;
    m = 0;
    if(time === "m"){
        h = 8;
        // 计算预期时间
        dur = 240/MorningAppoint * (ranking - 1);
    }else{
        h = 14;
        dur = 240/AfternoonAppoint * (ranking - 1);
    }
    h = h + dur/60;
    m = dur%60;
    let Ptime = h + ':' + (m < 10)?'0':'' + m;
    return Ptime;
}

export const TimeAppointment = (value,callback) =>{
    const url = `${config.apiUrl}/addAppointment`;
    const Wrapcallback = (data) =>{
        if(data.status >= 0){
            message.success(data.msg);
            let Ptime = getPredictedTime(data.ranking)
            callback(data);
        }
        else{
            message.error(data.msg);
        }
    }
    let Pid = localStorage.getItem("patientID");
    let data = {patientID:Pid,...value};
    postRequest(url, data, Wrapcallback);
}

export const GETAppointment = (callback) =>{
    const url = `${config.apiUrl}/getAppointment`;
    let key = localStorage.getItem("patientID");
    let Pid = parseInt(key);
    let data = {patientID:Pid};
    postRequest(url,data,callback);
}



export const ADD_TO_APPOINT = (data) =>{

}


export const GET_Record = (callback) =>{
    localStorage.getItem("patientID");
    let record = localStorage.getItem("record");
    

}