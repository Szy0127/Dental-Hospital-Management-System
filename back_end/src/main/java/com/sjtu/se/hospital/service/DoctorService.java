package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.Doctor;

import java.util.List;

public interface DoctorService {
    Doctor getDoctor(Integer ID);
    List<Doctor> getDoctorsByDept(Integer ID);
}
