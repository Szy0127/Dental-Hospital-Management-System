package com.sjtu.se.hospital.controller;
import com.sjtu.se.hospital.entity.*;
import com.sjtu.se.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @RequestMapping("/addAppointment")
    public Appointment addAppointment(
            @RequestParam("patientID") Integer patientID,
            @RequestParam("deptID") Integer deptID,
            @RequestParam("doctorID") Integer doctorID,
            @RequestParam("date") String date,
            @RequestParam("time") String time
    ) {
//        return null;
        return patientService.addAppointment(patientID,deptID,doctorID,date,time);
    }

    @RequestMapping("/getAppointments")
    public List<AppointmentEdited> getAppointmentsByPatient(@RequestParam("patientID") Integer ID) {
        return patientService.getAppointmentsByPatient(ID);
    }

    @RequestMapping("/getPatientInfo")
    public Record getPatientInfo(@RequestParam("patientID") Integer ID) {
        return patientService.getPatientInfo(ID);
    }

    @RequestMapping("/getHistories")
    public List<HistoryEdited> getHistories(@RequestParam("ID") Integer ID) {
        return patientService.getHistories(ID);
    }

    @RequestMapping("/addHistory")
    public void addHistory(
            @RequestParam("time")Date time,
            @RequestParam("patientID")Integer patientID,
            @RequestParam("deptID")Integer deptID,
            @RequestParam("description")String des
            ) {
        patientService.addHistory(new History(time, patientID, deptID, des));
    }
}
