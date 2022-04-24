package com.sjtu.se.hospital.service;


import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.entity.DepartmentEdited;
import com.sjtu.se.hospital.entity.DoctorEdited;
import javafx.util.Pair;

import java.util.List;

public interface DepartmentService {
    List<DepartmentEdited> getDepartments();
    Department getDeptOnly(Integer ID);
}
