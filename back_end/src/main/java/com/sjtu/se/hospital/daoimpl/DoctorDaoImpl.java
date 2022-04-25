package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.dao.DoctorDao;
import com.sjtu.se.hospital.entity.DoctorEdited;
import com.sjtu.se.hospital.repository.DepartmentRepository;
import com.sjtu.se.hospital.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;

@Repository
public class DoctorDaoImpl implements DoctorDao {
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public DoctorEdited getDoctor(Integer ID) {
        Doctor p = doctorRepository.getOne(ID);
        return new DoctorEdited(
                p.getId(),
                p.getName(),
                p.getGender(),
                departmentRepository.getOne(p.getDeptID()).getTitle(),
                p.getAge(),
                p.getPost(),
                p.getAvatar(),
                p.getIntro());
    }

    @Override
    public List<DoctorEdited> getDoctorsByDept(Integer ID) {
        List<Doctor> docs = doctorRepository.getDoctorsByDept(ID);
        LinkedList<DoctorEdited> res = new LinkedList<>();

        for (Doctor p : docs) {
            res.add(new DoctorEdited(
                    p.getId(),
                    p.getName(),
                    p.getGender(),
                    departmentRepository.getOne(p.getDeptID()).getTitle(),
                    p.getAge(),
                    p.getPost(),
                    p.getAvatar(),
                    p.getIntro()));
        }

        return res;
    }
}
