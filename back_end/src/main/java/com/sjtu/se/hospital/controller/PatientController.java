package com.sjtu.se.hospital.controller;
import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.AppointmentEdited;
import com.sjtu.se.hospital.entity.HistoryEdited;
import com.sjtu.se.hospital.entity.Record;
import com.sjtu.se.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public List<HistoryEdited> getHistories(@RequestBody Map<String, String> params) {
        return patientService.getHistories();
    }
}
