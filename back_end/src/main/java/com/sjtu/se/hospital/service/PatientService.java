package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.Appointment;

import java.util.List;


public interface PatientService {

    void addAppointment(Integer patientID,Integer deptID);
}
