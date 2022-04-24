package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.DoctorEdited;

import java.util.List;

public interface DoctorDao {
    DoctorEdited getDoctor(Integer ID);
    List<DoctorEdited> getDoctorsByDept(Integer ID);
}
