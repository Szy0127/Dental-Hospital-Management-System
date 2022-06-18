package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.entity.Schedule;

import java.util.List;

public interface DoctorDao {

    Doctor getDoctor(Integer ID);

    Doctor getDetailedDoctor(int doctorId);
    List<Doctor> getDoctorsByDept(Integer ID);
    List<Schedule> getSchedule(Integer ID);
    Doctor addNewDoctor(Doctor doctor);
    void delDoctor(int doctorId);
    void modifyDescription(Appointment appointment);
}
