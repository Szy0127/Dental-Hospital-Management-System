package com.sjtu.se.hospital.controller;

import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.entity.DepartmentEdited;
import com.sjtu.se.hospital.entity.DoctorEdited;
import com.sjtu.se.hospital.service.DepartmentService;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;

    @RequestMapping("/getDepartments")
    public List<DepartmentEdited> getDepartments() {
        return departmentService.getDepartments();
    }

    @RequestMapping("/getDeptName")
    public Department getDeptOnly(@RequestParam("deptID")Integer ID) {
        return departmentService.getDeptOnly(ID);
    }
}
