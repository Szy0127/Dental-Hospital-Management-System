import {postRequest, postRequest_v2} from "../utils/ajax";

export const getUser = (id, callback) => {
    const data = {ID: id};
    const url = `http://localhost:8080/getRecord`;
    postRequest_v2(url, data, callback);
};