import React from 'react'
import Schedule from '../../components/schedule/Schedule'

export default function Assignment() {
  const id = localStorage.getItem("doctorID");
  return (
    <div>
        <Schedule id ={id} editable={false}/>
    </div>
  )
}
