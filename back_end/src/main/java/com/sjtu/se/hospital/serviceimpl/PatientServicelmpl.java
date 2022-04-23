package com.sjtu.se.hospital.serviceimpl;

import com.sjtu.se.hospital.dao.AppointmentDao;
import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @ClassName BookServiceImpl
 * @Description the Implement of BookService
 * @Author thunderBoy
 * @Date 2019/11/6 16:04
 */

@Service
public class PatientServicelmpl implements PatientService {

    @Autowired
    private AppointmentDao appointmentDao;



    @Transactional
    @Override
    public void addAppointment(Integer patientID,Integer deptID) {
        if(appointmentDao.getRemain() > 0){
            appointmentDao.addAppointment(new Appointment(patientID,deptID));
        }
    }

}
