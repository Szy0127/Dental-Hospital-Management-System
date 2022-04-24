package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.dao.DepartmentDao;
import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.entity.DepartmentEdited;
import com.sjtu.se.hospital.repository.DepartmentRepository;
import com.sjtu.se.hospital.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;

@Repository
public class DepartmentDaoImpl implements DepartmentDao {
    @Autowired
    private DepartmentRepository departmentRepository;
    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public List<DepartmentEdited> getDepartments() {
        LinkedList<DepartmentEdited> res = new LinkedList<>();
        List<Department> dp = departmentRepository.getDepartments();

        for (Department p : dp) {
            DepartmentEdited de = new DepartmentEdited();
            de.id = p.getId();
            de.title = p.getTitle();
            de.doc_num = p.getDoc_num();
            de.doctors = doctorRepository.getDoctorsByDept(p.getId());
            res.add(de);
        }

        return res;
    }

    @Override
    public Department getDeptOnly(Integer ID) {
        return departmentRepository.getOne(ID);
    }
}
