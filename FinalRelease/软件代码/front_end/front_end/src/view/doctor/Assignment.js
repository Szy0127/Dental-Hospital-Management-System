import React from 'react'
import Schedule from '../../components/schedule/Schedule'

export default function Assignment() {
  const id = localStorage.getItem("ID");
  return (
    <div>
        <Schedule id ={id} editable={false}/>
    </div>
  )
}
