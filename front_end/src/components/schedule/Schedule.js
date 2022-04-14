import { Calendar, Badge } from 'antd';
import React, { useEffect } from 'react'
import './calendar.css'
const ScheduleData = [];
function getListData(value) {
  var data = ScheduleData.find((item) =>
    value.date() === item.date);
  return data;
}
function dateCellRender(value) {
  const listData = getListData(value);
  console.log(listData);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}
function importScheduleData() {
  const callback = (data) => {
    ScheduleData = data;
  }
}
export default function Schedule(props) {
  useEffect(() => {
    importScheduleData(props.schedule);
  });
  return (
    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
  )
}
