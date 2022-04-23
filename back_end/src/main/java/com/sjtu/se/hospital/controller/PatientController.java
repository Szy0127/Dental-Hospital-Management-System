package com.sjtu.se.hospital.controller;
import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @RequestMapping("/addAppointment")
    public Appointment addAppointment(
            @RequestParam Integer patientID,
            @RequestParam Integer deptID,
            @RequestParam Integer doctorID,
            @RequestParam String date,
            @RequestParam String time
    ) {
//        return null;
        return patientService.addAppointment(patientID,deptID,doctorID,date,time);
    }
}
