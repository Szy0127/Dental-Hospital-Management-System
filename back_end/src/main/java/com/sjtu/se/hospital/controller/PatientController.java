package com.sjtu.se.hospital.controller;
import com.sjtu.se.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @RequestMapping("/addAppointment")
    public void addAppointment(
            @RequestParam Integer patientID,
            @RequestParam Integer deptID
    ) {
        patientService.addAppointment(patientID,deptID);
    }
}
