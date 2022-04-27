package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.*;

import java.util.List;


public interface PatientService {

    Appointment addAppointment(Integer patientID,Integer deptID,Integer doctorID,String date,String time);
    boolean cancelAppointment(Integer ranking,Integer patientID,Integer deptID,Integer doctorID,String date,String time);
    List<Schedule> getFullScheduleByDateTime(String date, String time);
    List<AppointmentEdited> getAppointmentsByPatient(Integer ID);
    Record getPatientInfo(Integer ID);
    List<HistoryEdited> getHistories(Integer ID);
    void addHistory(String time, Integer patientID, Integer deptID, String des);
    void updateDescription(Integer ID, String time, String newDes);
}
