package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Schedule;

import java.sql.Date;

public interface ScheduleDao {

    Schedule getSchedule(Integer doctorID, Date date);
    void update(Schedule schedule,String time);
}
