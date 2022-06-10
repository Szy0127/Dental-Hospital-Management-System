package com.sjtu.se.hospital.controller;
import com.sjtu.se.hospital.entity.*;
import com.sjtu.se.hospital.service.MQService;
import com.sjtu.se.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
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

    @RequestMapping("/getPatientInfo")
    public Record getPatientInfo(@RequestParam("patientID") Integer ID) {
        return patientService.getPatientInfo(ID);
    }

    @RequestMapping("/getHistories")
    public List<HistoryEdited> getHistories(@RequestParam("ID") Integer ID) {
        return patientService.getHistories(ID);
    }

//    @RequestMapping("/addHistory")
//    public void addHistory(
//            @RequestParam("time")String time,
//            @RequestParam("patientID")Integer patientID,
//            @RequestParam("deptID")Integer deptID,
//            @RequestParam("description")String des
//    ) {
//        patientService.addHistory(time, patientID, deptID, des);
//    }

    @RequestMapping("/updateDescriptionOfHistory")
    public void updateDescription(
            @RequestParam("patientID") Integer ID,
            @RequestParam("date") String time,
            @RequestParam("newDes") String newDes
    ) {
        patientService.updateDescription(ID, time, newDes);
    }
}
