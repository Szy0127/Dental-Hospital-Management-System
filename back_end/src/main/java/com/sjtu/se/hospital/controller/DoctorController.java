package com.sjtu.se.hospital.controller;

import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.DoctorEdited;
import com.sjtu.se.hospital.entity.Schedule;
import com.sjtu.se.hospital.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @RequestMapping("/getDoctor")
    DoctorEdited getDoctor(@RequestParam("doctorID") Integer ID) {
        return doctorService.getDoctor(ID);
    }

    @RequestMapping("/getDoctorsByDept")
    List<DoctorEdited> getDoctorsByDept(@RequestParam("deptID") Integer ID) {
        return doctorService.getDoctorsByDept(ID);
    }

    @RequestMapping("/getScheduleByDocID")
    List<Schedule> getSchedule(@RequestParam("docID") Integer ID) {
        return doctorService.getSchedule(ID);
    }

    @RequestMapping("/getAppointmentsByDocID")
    List<Appointment> getAppointments(@RequestParam("docID") Integer ID) {
        return doctorService.getAppointments(ID);
    }

}
