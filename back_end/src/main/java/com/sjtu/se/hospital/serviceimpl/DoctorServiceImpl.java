package com.sjtu.se.hospital.serviceimpl;

import com.sjtu.se.hospital.dao.AppointmentDao;
import com.sjtu.se.hospital.dao.DoctorDao;
import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.entity.DoctorEdited;
import com.sjtu.se.hospital.entity.Schedule;
import com.sjtu.se.hospital.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {
    @Autowired
    private DoctorDao doctorDao;
    @Autowired
    private AppointmentDao appointmentDao;

    @Override
    public DoctorEdited getDoctor(Integer ID) {
        return doctorDao.getDoctor(ID);
    }

    @Override
    public List<DoctorEdited> getDoctorsByDept(Integer ID) {
        return doctorDao.getDoctorsByDept(ID);
    }

    @Override
    public List<Schedule> getSchedule(Integer ID) {
        return doctorDao.getSchedule(ID);
    }

    @Override
    public List<Appointment> getAppointments(Integer ID) {
        return appointmentDao.getAppointmentsByDoc(ID);
    }

    @Override
    public Doctor addNewDoctor(Doctor doctor) {
        return doctorDao.addNewDoctor(doctor);
    }
}
