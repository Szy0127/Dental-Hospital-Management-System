import { data, data2, news , notification,schedule } from "../utils/data";

// 获取医生信息
export const getDoctor = (key,callback)=>{
    if(key === null){

    }
    let doctor = data.find((item) =>(
        item.id === key
    ));
    console.log(doctor);
    callback(doctor);
    return;
}

export const GET_SCHEDULE = (id,callback) =>{
    var doc_shedule = [];    
    console.log(schedule);
    var doc_id = id;
    for (var item in schedule) {
        console.log(schedule[item].doc_id === doc_id);
        if(schedule[item].doc_id === doc_id){
            doc_shedule.push(schedule[item]);
        }
    }
    callback(doc_shedule);
}

export const getDoctors = (callback) => {
    callback(data);
}

// 获取医生排班表

// 获取info和news
export const getInfo = (callback) =>{
    callback(news);
}

