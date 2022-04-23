package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.Appointment;

import java.text.ParseException;
import java.util.List;


public interface PatientService {

    Appointment addAppointment(Integer patientID,Integer deptID,Integer doctorID,String date,String time);
}
