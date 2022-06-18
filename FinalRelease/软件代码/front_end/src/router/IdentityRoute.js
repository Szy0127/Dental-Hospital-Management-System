import React, { useEffect, useState } from 'react'
import { Outlet, Route } from 'react-router-dom';
// import * as UsrService from "../services/UsrService"
export default function IdentityRoute(props) {
    const [login, setLogin] = useState(false);
    const [identity, setIdentity] = useState("");
    const checkAuth = (data) =>{
        if(data.state >= 0){
            setLogin(true);
            setIdentity(data.data.identity);
        }
    }
    useEffect(() => {
        setIdentity("patient");
        // UsrService.checkSession(checkAuth);
    }, []);
    return (
        <Outlet identity={identity}/>
    )
}
