package com.sjtu.se.hospital.controller;

import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.service.DepartmentService;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;

    @RequestMapping("/getDepartment")
    public Pair<Department, List<Doctor>> getDepartment(Integer ID) {
        return departmentService.getDepartment(ID);
    }

    @RequestMapping("/getDepartments")
    public List<Department> getDepartments() {
        return departmentService.getDepartments();
    }
}
