package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Appointment;

import java.util.List;

public interface AppointmentDao {
//    Book findOne(Integer id);

    void addAppointment(Appointment appointment);
}
