package com.sjtu.se.hospital.controller;

import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.service.DepartmentService;
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
    public List<Department> getDepartments() {
        return departmentService.getDepartments();
    }

    @RequestMapping("/getOneDepartment")
    public Department getDeptOnly(@RequestParam("id")Integer ID) {
        return departmentService.getDeptOnly(ID);
    }

    @RequestMapping("/addNewDept")
    public Department addNewDept(@RequestParam("title") String title) {
        return departmentService.addNewDept(new Department(title));
    }

    @RequestMapping("delDept")
    public void delDept(@RequestParam("id") int deptId) {
        departmentService.delDept(deptId);
    }

    @RequestMapping("/alterDeptName")
    public void alterDeptName(
            @RequestParam("id") int deptId,
            @RequestParam("name") String name
    ) {
        departmentService.alterDeptName(deptId, name);
    }
}
