package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.dao.DoctorDao;
import com.sjtu.se.hospital.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DoctorDaoImpl implements DoctorDao {
    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public Doctor getDoctor(Integer ID) {
        return doctorRepository.getOne(ID);
    }

    @Override
    public List<Doctor> getDoctorsByDept(Integer ID) {
        return doctorRepository.getDoctorsByDeptID(ID);
    }
}
