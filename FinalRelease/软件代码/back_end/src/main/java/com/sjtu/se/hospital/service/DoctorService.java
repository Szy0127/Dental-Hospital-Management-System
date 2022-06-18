package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.entity.Schedule;

import java.util.List;

public interface DoctorService {

    Doctor getDoctor(Integer ID);
    List<Doctor> getDoctorsByDept(Integer ID);

    List<Schedule> getSchedule(Integer ID);
    List<Appointment> getAppointments(Integer ID);
    Doctor addNewDoctor(Doctor doctor);
    void delDoctor(int doctorId);
    void modifyDescription(Appointment appointment);
}
