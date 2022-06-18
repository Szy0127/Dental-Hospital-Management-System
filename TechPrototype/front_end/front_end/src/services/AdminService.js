import { postRequest, postRequest_v2 } from "../utils/ajax";
import sha256 from 'crypto-js/sha256';
import { data } from "../utils/data";
const root = "http://10.119.10.57:8080";
// const root = "http://localhost:8080"
const nonce = "12345";

export const delDoctor = (doctorId,callback) => {
    let url = root + "/delDoctor";
    let data = {doctorId:doctorId};
    postRequest_v2(url,data,callback);
}

export const editDoctor = (doctorId,data,callback) =>{
    let url = root + "/modifyDoctor";
    console.log(data);
    data['id'] = doctorId;
    data['deptID'] = 1;
    data['password'] = sha256(data['password'] + nonce.toString()).toString();
    postRequest_v2(url,data,callback);
}

export const addDoctor = (form,callback) =>{
    let url = root + "/modifyDoctor";
    let data = {...form,id:0};
    data['deptID'] = 1;
    data['password'] = sha256(data['password'] + nonce.toString()).toString();
    console.log(data)
    postRequest_v2(url,data,callback);
}

export const addDept = (data,callback) =>{
    let url = root + "/addNewDept";
    postRequest_v2(url,data,callback);
}

export const saveDept = (data,callback) =>{
    let url = root + "/alterDeptName";
    postRequest_v2(url,data,callback);
}

export const delDept = (data,callback) =>{
    let url = root + "/delDept";
    postRequest_v2(url,data,callback);
}

export const modifyConstant = (data,callback) => {
    let url = root + "/modifyConstants";
    console.log(data);
    postRequest_v2(url,data,callback);
}

export const getConstant = (callback) =>{
    let url = root + "/getConstants";
    postRequest_v2(url,null,callback);
}