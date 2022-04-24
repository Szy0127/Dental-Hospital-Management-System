package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.entity.DepartmentEdited;

import java.util.List;

public interface DepartmentDao {
    List<DepartmentEdited> getDepartments();
    Department getDeptOnly(Integer ID);
}
