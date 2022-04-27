package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.DoctorEdited;
<<<<<<< HEAD
=======
import com.sjtu.se.hospital.entity.Record;
>>>>>>> working
import com.sjtu.se.hospital.entity.Schedule;

import java.util.List;

public interface DoctorService {
    DoctorEdited getDoctor(Integer ID);
    List<DoctorEdited> getDoctorsByDept(Integer ID);
    List<Schedule> getSchedule(Integer ID);
<<<<<<< HEAD
=======
    List<Appointment> getAppointments(Integer ID);
>>>>>>> working
}
