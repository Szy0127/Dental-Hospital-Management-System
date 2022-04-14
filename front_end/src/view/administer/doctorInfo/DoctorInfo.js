import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import InfoDisplay from '../../../components/infoDisplay/InfoDisplay';
import { getDoctor } from '../../../services/AdminService';
import Schedule from '../../doctor/schedule/schedule';

export default function DoctorInfo() {
    const [doctor,setDoctor] = useState({});
    const [schedule,getSchedule] = useState();
    const location = useLocation();
    const {state} = location;
    console.log(state)
    const callback = (data) =>{
        setDoctor(data);
    }
    if(state.type === "edit"){
        getDoctor(state.key,callback);
    }
  return (
    <div>
        <Schedule props = {doctor}/>
    </div>
  )
}
