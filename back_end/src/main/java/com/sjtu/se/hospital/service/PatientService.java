package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.*;

import java.sql.Date;
import java.util.List;


public interface PatientService {

    Appointment addAppointment(Integer patientID,Integer deptID,Integer doctorID,String date,String time);
    boolean cancelAppointment(Integer ranking,Integer patientID,Integer deptID,Integer doctorID,String date,String time);
//    List<Schedule> getFullScheduleByDateTime(String date, String time);
    List<AppointmentEdited> getAppointmentsByPatient(Integer ID);
    Patient getPatientById(Integer ID);
    boolean register(String name,String gender,String email,String phone,Integer age,String username ,String password);
    Patient resetPatient(Integer id);

    void discardAppointment(Integer patientID);
}
