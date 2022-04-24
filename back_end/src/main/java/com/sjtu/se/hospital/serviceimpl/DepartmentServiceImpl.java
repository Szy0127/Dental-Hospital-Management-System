package com.sjtu.se.hospital.serviceimpl;

import com.sjtu.se.hospital.dao.DepartmentDao;
import com.sjtu.se.hospital.dao.DoctorDao;
import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.entity.DoctorEdited;
import com.sjtu.se.hospital.service.DepartmentService;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService {
    @Autowired
    private DepartmentDao departmentDao;
    @Autowired
    private DoctorDao doctorDao;

    @Override
    public Pair<Department, List<DoctorEdited>> getDepartment(Integer ID) {
        Department dept = departmentDao.getDepartment(ID);
        return new Pair<>(dept, doctorDao.getDoctorsByDept(ID));
    }

    @Override
    public List<Department> getDepartments() {
        return departmentDao.getDepartments();
    }

    @Override
    public Department getDeptOnly(Integer ID) {
        return departmentDao.getDeptOnly(ID);
    }
}
