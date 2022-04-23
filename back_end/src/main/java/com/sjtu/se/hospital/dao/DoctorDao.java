package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Doctor;

import java.util.List;

public interface DoctorDao {
    Doctor getDoctor(Integer ID);
    List<Doctor> getDoctorsByDept(Integer ID);
}
