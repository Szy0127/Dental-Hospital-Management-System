package com.sjtu.se.hospital.dao;


import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.entity.Doctor;
import javafx.util.Pair;

import java.util.List;

public interface DepartmentDao {
    Department getDepartment(Integer ID);
    List<Department> getDepartments();
}
