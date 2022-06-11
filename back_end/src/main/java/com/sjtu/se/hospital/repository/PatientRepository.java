package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient,Integer> {
//    List<Patient> getPatientsByUsername(String username);
}
