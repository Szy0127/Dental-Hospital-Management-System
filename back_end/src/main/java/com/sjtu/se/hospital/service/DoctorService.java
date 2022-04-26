package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.DoctorEdited;
import com.sjtu.se.hospital.entity.Schedule;

import java.util.List;

public interface DoctorService {
    DoctorEdited getDoctor(Integer ID);
    List<DoctorEdited> getDoctorsByDept(Integer ID);
    List<Schedule> getSchedule(Integer ID);
}