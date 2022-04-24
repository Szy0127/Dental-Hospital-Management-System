package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Department;

import java.util.List;

public interface DepartmentDao {
    Department getDepartment(Integer ID);
    List<Department> getDepartments();
    Department getDeptOnly(Integer ID);
}
