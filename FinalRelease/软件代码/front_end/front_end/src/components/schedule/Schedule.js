import { Calendar, Button, Popover, Alert, List, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import './Schedule.css'
import { getScheduleByDocId } from '../../services/DataSurvice';
const handleDelete = (item) => {
  console.log("delete")
  console.log(item)
}

export default function Schedule(props) {
  const [ScheduleData, setScheduleData] = useState([]);
  const { id, editable } = props;
  console.log(id)
  useEffect(() => {
    const callback = (data) => {
      console.log(data);
      setScheduleData(data);
    }
    getScheduleByDocId(id, callback);
  }, []);

  const [schedule, setSchedule] = useState(getListData(moment().format('YYYY-MM-DD')))
  const [date, setDate] = useState(moment);

  function getListData(value) {
    var data = ScheduleData.find((item) =>
      value === item.date);
    if (data === undefined) {
      return [];
    }
    return [data];
  }

  function dateCellRender(value) {
    const list = getListData(value.format('YYYY-MM-DD'));
    return (
      <ul className="events">
        {list.map((item) => (
          <li>
            <Popover content={
              <div>
                {item.n_morning}位病人
                {(editable && date.diff(moment(), 'days') > 7) ? <a onClick={() => { handleDelete(item) }}>删除</a> : <></>}
              </div>
            } trigger="hover">
              <div>8:00-12:00</div>
            </Popover>
            <Popover content={
              <div>
                {item.n_afternoon}位病人
                {(editable && date.diff(moment(), 'days') > 7) ? <a onClick={() => { handleDelete(item) }}>删除</a> : <></>}
              </div>
            } trigger="hover">
              <div>14:00-18:00</div>
            </Popover>
          </li>
        ))}
      </ul>
    );
  }

  const onSelect = (value) => {
    console.log(value);
    setDate(value);
    setSchedule(getListData(value.format('YYYY-MM-DD')));
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
                  actions={(editable && date.diff(moment(), 'days') > 7) ? [<Button key="list-loadmore-more" onClick={() => { handleDelete(item) }}>删除</Button>] : []}>
                  <List.Item.Meta
                    title={item.date}
                    description={
                      <div>
                        <div>
                          就诊人数：上午 {item.n_morning} 人
                        </div>
                        <div>
                          就诊人数：下午 {item.n_afternoon} 人
                        </div>
                      </div>
                    } />
                </List.Item>
              )
            } />
        </Col>
      </Row>
    </div>
  )
}
