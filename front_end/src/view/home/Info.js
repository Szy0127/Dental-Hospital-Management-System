import React from "react";
import {useLocation} from "react-router-dom";

const InfoPage = function (props) {
    let location = useLocation();
    const query = location.search;
    const arr = query.split('&');
    const id = arr[0].substr(4);
    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            <p>{id}</p>
        </React.Fragment>
    )
}
export default InfoPage;