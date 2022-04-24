package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.dao.DepartmentDao;
import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DepartmentDaoImpl implements DepartmentDao {
    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public Department getDepartment(Integer ID) {
        return departmentRepository.getOne(ID);
    }

    @Override
    public List<Department> getDepartments() {
        return departmentRepository.getDepartments();
    }
}