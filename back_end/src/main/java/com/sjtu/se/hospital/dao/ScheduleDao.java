package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Schedule;

import java.sql.Date;
import java.util.List;

public interface ScheduleDao {

    Schedule getSchedule(Integer doctorID, Date date);
    List<Schedule> getFullScheduleByDateTime(Date date, String time);
    void update(Schedule schedule,String time);
    void cancel(Integer doctorID,Date date,String time);
}
