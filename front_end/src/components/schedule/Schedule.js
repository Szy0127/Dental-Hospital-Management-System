import { Calendar, Badge } from 'antd';
import React, { useEffect } from 'react'
import './calendar.css'
const ScheduleData = [];
function getListData(value) {
  var data = ScheduleData.find((item) =>
    value.date() === item.date);
  return data;
}
const handleDelete = (item) => {
  console.log(item);
}
function itemContent(item) {
  return (
    <div>
      {item.content}
      <a onClick={handleDelete(item)}>删除</a>
    </div>
  )
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li>
          <Popover content={itemContent(item)} trigger="hover">
            {item.content}
          </Popover>
        </li>
      ))}
    </ul>
  );
}
function importScheduleData(props) {
  const callback = (data) => {
    ScheduleData = data;
  }
  GET_SCHEDULE(props.id, callback);
}
export default function Schedule(props) {
  useEffect(() => {
    importScheduleData(props);
  });
  return (
    <div>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    </div>
  )
}
