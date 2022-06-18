package com.sjtu.se.hospital.controller;
import com.sjtu.se.hospital.entity.*;
import com.sjtu.se.hospital.service.MQService;
import com.sjtu.se.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @Autowired
    private MQService<AppointmentAdding> mqService;

    @RequestMapping("/addAppointment")
    public Appointment addAppointment(
            @RequestParam("patientID") Integer patientID,
            @RequestParam("deptID") Integer deptID,
            @RequestParam("doctorID") Integer doctorID,
            @RequestParam("date") String date,
            @RequestParam("time") String time
    ) {
//        mqService.produce(new AppointmentAdding(patientID, deptID, doctorID, date, time));
//        Integer patientID = SessionUtil.checkAuth();
        if (patientID == 0) {
            return null;
        }
        return patientService.addAppointment(patientID,deptID,doctorID,date,time);
    }
    @RequestMapping("/cancelAppointment")
    public boolean cancelAppointment(
            @RequestParam("ranking") Integer ranking,
            @RequestParam("patientID") Integer patientID,
            @RequestParam("deptID") Integer deptID,
            @RequestParam("doctorID") Integer doctorID,
            @RequestParam("date") String date,
            @RequestParam("time") String time
    ) {
        return patientService.cancelAppointment(ranking,patientID,deptID,doctorID,date,time);
    }


    @RequestMapping("/getFullScheduleByDateTime")
    public List<Schedule> getFullScheduleByDateTime(
            @RequestParam("date") String date,
            @RequestParam("time") String time) {
        return patientService.getFullScheduleByDateTime(date,time);
    }
    @RequestMapping("/getAppointments")
    public List<AppointmentEdited> getAppointmentsByPatient(@RequestParam("patientID") Integer ID) {
        return patientService.getAppointmentsByPatient(ID);
    }

    @RequestMapping("/getPatient")
    public Patient getPatientById(@RequestParam("patientID") Integer ID) {
        return patientService.getPatientById(ID);
    }
}
