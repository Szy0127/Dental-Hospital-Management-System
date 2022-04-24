package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.AppointmentCoKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, AppointmentCoKey> {
    @Query("select a from Appointment a where a.patientID=:ID")
    List<Appointment> getAppointmentsByPatient(@Param("ID") Integer ID);
}
