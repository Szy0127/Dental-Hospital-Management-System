import { Calendar, Badge, Button, Popover, Alert, List } from 'antd';
import moment from 'moment';
import React, { useState } from 'react'
import './calendar.css'
function getListData(value) {
  let listData;
  switch (value) {
    case 1:
      listData = [
        { type: 'success', content: '9:00-12:00' },
        { type: 'success', content: '14:00-17:00' },
      ];
      break;
    case 3:
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
  console.log("delete")
  console.log(item)
}
function itemContent(item) {
  return (
    <div>
      {item.content}
      <a onClick={()=>{handleDelete(item)}}>删除</a>
    </div>
  )
}

function dateCellRender(value) {
  const listData = getListData(value.date());
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

export default function Schedule() {
  const [date, setDate] = useState(moment);
  const [schedule,setSchedule] = useState(getListData(moment().date()))
  const onSelect = (value) => {
    console.log(value);
    setDate(value);
    setSchedule(getListData(value.date()));
    console.log(schedule);
  }
  return (
    <div>
      <div>
        <Alert
          message={`You selected date: ${date && date.format('YYYY-MM-DD')}`}
        />
        <Calendar dateCellRender={dateCellRender} onSelect={onSelect} />
      </div>
      <div>
        <List
        itemLayout="horizontal"
        dataSource={schedule}
        renderItem = {
          item => (
            <List.Item>
             {/* actions={[<Button key="list-loadmore-more" onClick={handleDelete(item)}>删除</Button>]}> */}
             <Button onClick={()=>{handleDelete(item)}}>删除</Button>
              <List.Item.Meta
              title ={item.content}
              description = {item.type}/>
            </List.Item>
          )
        }/>          
      </div>
    </div>
  )
}
