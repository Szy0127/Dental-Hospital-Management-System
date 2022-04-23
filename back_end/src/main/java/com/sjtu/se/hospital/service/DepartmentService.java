package com.sjtu.se.hospital.service;


import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.entity.Doctor;
import javafx.util.Pair;

import java.util.List;

public interface DepartmentService {
    Pair<Department, List<Doctor>> getDepartment(Integer ID);
    List<Department> getDepartments();
}
