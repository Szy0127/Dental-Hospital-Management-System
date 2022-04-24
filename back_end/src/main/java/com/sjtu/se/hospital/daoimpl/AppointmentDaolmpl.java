package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.dao.AppointmentDao;
import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class AppointmentDaolmpl implements AppointmentDao {

    @Autowired
    private AppointmentRepository appointmentRepository;


    public int getRemain(){
        return 10;
    }
    @Override
    public void addAppointment(Appointment appointment) {
        appointmentRepository.save(appointment);
    }





}
