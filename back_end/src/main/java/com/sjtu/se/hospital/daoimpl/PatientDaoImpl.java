package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.dao.PatientDao;
import com.sjtu.se.hospital.entity.Patient;
import com.sjtu.se.hospital.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class PatientDaoImpl implements PatientDao {
    @Autowired
    PatientRepository patientRepository;

    @Override
    public Patient getPatientByID(Integer id) {
        return patientRepository.getOne(id);
    }

    @Override
    public void save(Patient patient) {

        patientRepository.save(patient);
    }

    @Override
    public Patient resetPunish(Integer id) {
        Patient patient = patientRepository.getOne(id);
        patient.setPunish_count(0);
        patientRepository.save(patient);
        return patient;
    }
}
