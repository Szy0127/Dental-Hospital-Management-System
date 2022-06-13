package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Department;

import java.util.List;

public interface DepartmentDao {
    List<Department> getDepartments();
    Department getDeptOnly(Integer ID);
    void alterDeptName(int deptId, String name);
    Department addNewDept(Department department);
    void delDept(int deptId);
    void alterDocNum(int deptId, int adding);
}
