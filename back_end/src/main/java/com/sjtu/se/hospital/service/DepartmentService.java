package com.sjtu.se.hospital.service;


import com.sjtu.se.hospital.entity.Department;

import java.util.List;

public interface DepartmentService {
    List<Department> getDepartments();
    Department getDeptOnly(Integer ID);
    void alterDeptName(int deptId, String name);
}
