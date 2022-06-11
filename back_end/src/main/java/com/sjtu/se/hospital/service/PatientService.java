package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.*;

import java.sql.Date;
import java.util.List;


public interface PatientService {

    Appointment addAppointment(Integer patientID,Integer deptID,Integer doctorID,String date,String time);
    boolean cancelAppointment(Integer ranking,Integer patientID,Integer deptID,Integer doctorID,String date,String time);
    List<Schedule> getFullScheduleByDateTime(String date, String time);
    List<AppointmentEdited> getAppointmentsByPatient(Integer ID);
    Record getPatientInfo(Integer ID);
    List<HistoryEdited> getHistories(Integer ID);
    void addHistory(Date time, Integer patientID, Integer deptID);
    void removeHistory(Date date, Integer patientID, Integer deptID);
    void updateDescription(Integer ID, String time, String newDes);

    boolean register(String name,String gender,String email,String phone,Integer age,String username ,String password);

    Patient resetPatient(Integer id);
}
