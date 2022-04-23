package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Schedule;

import java.util.Date;

public interface ScheduleDao {

    Schedule getSchedule(Integer doctorID, Date date);
    void updateMorning(Schedule schedule);
    void updateAfternoon(Schedule schedule);
}
