import { message } from "antd";
import { postRequest, postRequest_v2 } from "../utils/ajax";
const root = "http://localhost:8080";

const MorningAppoint = 30;
const AfternoonAppoint = 40;

export const getPredictedTime = (time, ranking) => {
    let h, m, dur;
    m = 0;
    if (time === "m") {
        h = 8;
        // 计算预期时间
        dur = 240 / MorningAppoint * (ranking - 1);
    } else {
        h = 14;
        dur = 240 / AfternoonAppoint * (ranking - 1);
    }
    h = parseInt(h + dur / 60);
    m = dur % 60;
    console.log(h);
    console.log(m);
    var mm = (m < 10) ? "0" : "";
    var Ptime = h + ":" + mm + m;
    console.log(Ptime);
    return Ptime;
}

export const AddAppointment = (value, callback) => {
    const url = root + "/addAppointment";
    const Wrapcallback = (data) => {
        // if(data.status >= 0){
        console.log(data);
        let Ptime = getPredictedTime(data.time, data.ranking)
        let backData = { ...data, 'Ptime': Ptime };
        message.success('预约成功！预期时间为：' + Ptime);
        console.log(backData)
        callback(backData);
        // }
        // else{
        //     message.error(data.msg);
        // }
    }
    let Pid = localStorage.getItem("patientID");
    let data = { patientID: 1, ...value };
    console.log(data);
    postRequest_v2(url, data, Wrapcallback);
}

export const getAppointments = (callback) => {
    const url = root + "/getAppointments";
    let key = localStorage.getItem("patientID");
    let Pid = parseInt(key);
    let data = { patientID: 1 };
    postRequest_v2(url, data, callback);
}

export const ADD_TO_APPOINT = (data) => {

}


export const GET_Record = (callback) => {
    localStorage.getItem("patientID");
    let record = localStorage.getItem("record");


}