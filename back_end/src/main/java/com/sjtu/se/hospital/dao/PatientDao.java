package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Patient;

import java.sql.Timestamp;

public interface PatientDao {

    Patient getPatientByID(Integer id);

    Patient resetPunish(Integer id);
    void save(Patient patient);

    Integer punish(Integer id);

    void setPunishBegin(Integer id,Timestamp begin);
}
