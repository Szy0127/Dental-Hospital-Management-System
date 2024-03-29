import {postRequest, postRequest_v2} from "../utils/ajax";
import {data} from "../utils/data";
const root = "http://10.119.10.57:8080";

export const getUser = (patientID, callback) => {
    const data = {patientID: patientID};
    const url = root + "/getPatientInfo";
    postRequest_v2(url, data, callback);
}

export const getNews = (callback) => {
    const url = root + "/getNews";
    postRequest(url, null, callback);
}

export const getNotifications = (callback) => {
    const url = root + "/getNotifications";
    postRequest(url, null, callback);
}

export const getPatientsByID = (ID,callback) => {
    const data = {patientID: ID};
    const url = root + "/getPatient";
    postRequest_v2(url, data, callback);
}

export const getHistories = (patientID, callback) => {
    const url = root + "/getHistories";
    const data = {ID: patientID}
    postRequest_v2(url, data, callback);
}

export const addHistory = (time, patientID, deptID, des) => {
    const url = root + "/addHistory";
    const data = {
        time: time,
        patientID: patientID,
        deptID: deptID,
        description: des
    };
    postRequest_v2(url, data, ()=>{});
}

export const updateDescriptionOfHistory = (patientID, date, newDes) => {
    const url = root + "/updateDescriptionOfHistory";
    const data = {
        patientID: patientID,
        date: date,
        newDes: newDes
    };
    postRequest_v2(url, data, null);
}

export const getDepartments = (data, callback) =>{
    const url = root + "/getDepartments";
    postRequest_v2(url, null, callback);
}

export const getDeptOnly = (deptID, callback) => {
    const data = {deptID: deptID};
    const url = root + "/getDeptName";
    postRequest_v2(url, data, callback);
}

export const getDoctors = (deptId, callback) => {
    const data = {deptID: deptId};
    const url = root + "/getDoctorsByDept";
    postRequest_v2(url, data, callback);
}


export const getDoctor = (id, callback) => {
    const data = {doctorID: id};
    const url = root + "/getDoctor";
    postRequest_v2(url, data, callback);
}

export const getAppointmentsByDocID = (docID, callback) => {
    const data = {docID: docID};
    const url = root + "/getAppointmentsByDocID";
    postRequest_v2(url, data, callback);
}


export const getScheduleByDocId = (docID, callback) => {
    const data = {docID: docID};
    const url = root + "/getScheduleByDocID";
    postRequest_v2(url, data, callback);
}

export const MngOrAftn = (flag) => {
    return flag === 'm' ? 'morning' : 'afternoon';
}

export const MaleOrFemale = (flag) => {
    return flag === 'm' ? 'male' : 'female';
}

export const discardAppointment = (patientID) => {
    const data = {patientID: patientID};
    const url = root + "/discardAppointment";
    postRequest_v2(url, data, ()=>{})
}

export const modifyDesc = (rank, id, deptId, docId, date, time, desc) => {
    const data = {
        ranking: rank,
        patientID: id,
        deptID: deptId,
        doctorID: docId,
        date: date,
        time: time,
        description: desc
    }
    const url = root + "/modifyDescription"
    postRequest_v2(url, data, ()=>{})
}
