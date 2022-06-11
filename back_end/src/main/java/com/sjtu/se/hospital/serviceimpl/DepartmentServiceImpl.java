package com.sjtu.se.hospital.serviceimpl;

import com.sjtu.se.hospital.dao.DepartmentDao;
import com.sjtu.se.hospital.dao.DoctorDao;
import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.service.DepartmentService;
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
    public List<Department> getDepartments() {
        return departmentDao.getDepartments();
    }

    @Override
    public Department getDeptOnly(Integer ID) {
        return departmentDao.getDeptOnly(ID);
    }
}
