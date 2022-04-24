import { Calendar, Button, Popover, Alert, List, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { GET_SCHEDULE } from '../../services/AdminService';
import './Schedule.css'
const handleDelete = (item) => {
  console.log("delete")
  console.log(item)
}

export default function Schedule(props) {
  const [ScheduleData, setScheduleData] = useState([]);
  const {id,editable} = props;
  console.log(editable)
  useEffect(() => {
    const callback = (data) => {
      setScheduleData(data);
    }
  console.log(id);

    GET_SCHEDULE(id, callback);
    console.log(ScheduleData);
  },[]);

  const [schedule, setSchedule] = useState(getListData(moment().date()))
  const [date, setDate] = useState(moment);

  function itemContent(item) {
    return (
      <div>
        {item.time}
        {item.content}
        {()=>(editable?<a onClick={() => { handleDelete(item) }}>删除</a>:<></>)}
      </div>
    )
  }

  function getListData(value) {
    var data = ScheduleData.find((item) =>
      value === item.date);
    if (data == null) {
      return [];
    }
    return data.Datelist;
  }

  function dateCellRender(value) {
    const listData = getListData(value.date());
    return (
      <ul className="events">
        {listData.map(item => (
          <li>
            <Popover content={itemContent(item)} trigger="hover">
              {item.time}
            </Popover>
          </li>
        ))}
      </ul>
    );
  }

  const onSelect = (value) => {
    console.log(value);
    setDate(value);
    setSchedule(getListData(value.date()));
    console.log(schedule);
  }

  return (
    <div>
      <Row>
        <Col span={16}>
          <div>
            <Alert
              message={`You selected date: ${date && date.format('YYYY-MM-DD')}`}
            />
            <Calendar dateCellRender={dateCellRender} onSelect={onSelect} />
          </div>
          </Col>
          <Col span={8}>
            <List
              itemLayout="horizontal"
              dataSource={schedule}
              renderItem={
                item => (
                  <List.Item
                    actions={()=>(editable?[<Button key="list-loadmore-more" onClick={() => { handleDelete(item) }}>删除</Button>]:[<></>])}>
                    <List.Item.Meta
                      title={item.time}
                      description={item.content} />
                  </List.Item>
                )
              } />
          </Col>
      </Row>
    </div>
  )
}
