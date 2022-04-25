import {postRequest, postRequest_v2} from "../utils/ajax";
const root = "http://localhost:8080";

export const getUser = (id, callback) => {
    const data = {patientID: id};
    const url = root + "/getPatientInfo";
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
        des: des
    };
    postRequest_v2(url, data, null);
}

export const getDepartments = (data, callback) =>{
    const url = root + "/getDepartments";
    postRequest(url, data, callback);
}

export const getDeptOnly = (id, callback) => {
    const data = {deptID: id};
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