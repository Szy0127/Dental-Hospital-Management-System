package com.sjtu.se.hospital.controller;

import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @RequestMapping("/getDoctor")
    Doctor getDoctor(Integer ID) {
        return doctorService.getDoctor(ID);
    }

    @RequestMapping("/getDoctorsByDept")
    List<Doctor> getDoctorsByDept(Integer ID) {
        return doctorService.getDoctorsByDept(ID);
    }
}
