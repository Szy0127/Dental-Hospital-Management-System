package com.sjtu.se.hospital.serviceimpl;

import com.sjtu.se.hospital.dao.DoctorDao;
import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {
    @Autowired
    private DoctorDao doctorDao;

    @Override
    public Doctor getDoctor(Integer ID) {
        return doctorDao.getDoctor(ID);
    }

    @Override
    public List<Doctor> getDoctorsByDept(Integer ID) {
        return doctorDao.getDoctorsByDept(ID);
    }
}
