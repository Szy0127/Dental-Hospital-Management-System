import { Calendar, Badge } from 'antd';
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

function dateCellRender(value) {
  const listData = getListData(value);
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

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

export default function Schedule() {
  return (
    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
  )
}
