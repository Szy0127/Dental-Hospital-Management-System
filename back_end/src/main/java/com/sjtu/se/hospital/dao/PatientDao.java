package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Patient;

public interface PatientDao {

    Patient getPatientByID(Integer id);

    Patient resetPunish(Integer id);
    void save(Patient patient);
}
