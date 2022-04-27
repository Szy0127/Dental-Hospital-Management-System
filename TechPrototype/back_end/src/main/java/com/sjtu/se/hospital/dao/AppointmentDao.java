package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.AppointmentEdited;

import java.util.List;

public interface AppointmentDao {

    void addAppointment(Appointment appointment);
    boolean cancelAppointment(Appointment appointment);
    List<AppointmentEdited> getAppointmentsByPatient(Integer ID);
    List<Appointment> getAppointmentsByDoc(Integer ID);
}
