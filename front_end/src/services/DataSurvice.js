import {postRequest, postRequest_v2} from "../utils/ajax";
const root = "http://localhost:8080";

export const getUser = (id, callback) => {
    const data = {patientID: id};
    const url = root + "/getPatientInfo";
    postRequest_v2(url, data, callback);
}

export const getHistories = (data, callback) => {
    const url = root + "/getHistories";
    postRequest(url, data, callback);
}

export const getDepartments = (data, callback) =>{
    const url = root + "/getDepartments";
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
    return postRequest_v2(url, data, callback);
}

export const getDeptOnly = (id, callback) => {
    const data = {deptID: id};
    const url = root + "/getDeptName";
    postRequest_v2(url, data, callback);
}

export const MngOrAftn = (flag) => {
    return flag === 'm' ? 'morning' : 'afternoon';
}

export const MaleOrFemale = (flag) => {
    return flag === 'm' ? 'male' : 'female';
}