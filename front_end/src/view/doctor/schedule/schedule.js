import { Calendar, Badge, Button, Popover } from 'antd';
import React from 'react'
import './calendar.css'
function getListData(value) {
  let listData;
  switch (value.date()) {
    case 1:
      listData = [
        { type: 'success', content: '9:00-12:00' },
        { type: 'success', content: '14:00-17:00' },
      ];
      break;
    case 3:
      listData = [
        { type: 'warning', content: '9:00-12:00  胸腔手术' },
        { type: 'success', content: '14:00-17:00' },
      ];
      break;
    case 5:
      listData = [
        { type: 'success', content: '9:00-12:00' },
        { type: 'success', content: '14:00-17:00' },
      ];
      break;
    case 7:
      listData = [
        { type: 'warning', content: '9:00-12:00 胸腔手术' },
        { type: 'success', content: '14:00-17:00' },
      ];
      break;
    case 10:
      listData = [
        { type: 'success', content: '9:00-12:00' },
        { type: 'success', content: '14:00-17:00' },
      ];
      break;
    case 13:
      listData = [
        { type: 'success', content: '9:00-12:00' },
        { type: 'success', content: '14:00-17:00' },
      ];
      break;
    case 15:
      listData = [
        { type: 'success', content: '9:00-12:00' },
        { type: 'success', content: '14:00-17:00' },
      ];
      break;
    case 19:
      listData = [
        { type: 'success', content: '9:00-12:00' },
        { type: 'success', content: '14:00-17:00' },
      ];
      break;
    case 21:
      listData = [
        { type: 'success', content: '9:00-12:00' },
        { type: 'success', content: '14:00-17:00' },
      ];
      break;
    case 23:
      listData = [
        { type: 'success', content: '9:00-12:00' },
        { type: 'success', content: '14:00-17:00' },
      ];
      break;
    default:
  }
  return listData || [];
}
const handleDelete = (item) => {
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
  console.log("list")
  console.log(listData)
  return (
    <ul className="events">
      {listData.map(item => (
        <li>
          <Popover content={itemContent(item)} trigger="hover">
            <b>{item.content}</b>
          </Popover>
        </li>
      ))}
    </ul>
  );
}

export default function Schedule() {
  return (
    <div>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  )
}
