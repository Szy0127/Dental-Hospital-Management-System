package com.sjtu.se.hospital.controller;

import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.entity.Schedule;
import com.sjtu.se.hospital.service.DoctorService;
import com.sjtu.se.hospital.service.PatientService;
import com.sjtu.se.hospital.utils.SessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.List;

@RestController
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @Autowired
    private PatientService patientService;

    @RequestMapping("/getDoctor")
    public Doctor getDoctor(@RequestParam("doctorID") Integer ID) {
        return doctorService.getDoctor(ID);
    }

    @RequestMapping("/getDoctorsByDept")
    public List<Doctor> getDoctorsByDept(@RequestParam("deptID") Integer ID) {
        return doctorService.getDoctorsByDept(ID);
    }

    @RequestMapping("/getScheduleByDocID")
    public List<Schedule> getSchedule(
//            @RequestParam("docID") Integer ID
    ) {
        if(!SessionUtil.isDoctor()){
            return null;
        }
        Integer ID = SessionUtil.getUserID();
        return doctorService.getSchedule(ID);
    }

    @RequestMapping("/getAppointmentsByDocID")
    public List<Appointment> getAppointments(
//            @RequestParam("docID") Integer ID
    ) {
        if(!SessionUtil.isDoctor()){
            return null;
        }
        Integer ID = SessionUtil.getUserID();
        return doctorService.getAppointments(ID);
    }

    @RequestMapping("/modifyDoctor")
    public Doctor addNewDoctor(
            @RequestParam("id") Integer id, //添加新医生：0， 修改医生信息：需指定id
            @RequestParam("name") String name,
            @RequestParam("gender") String gender,
            @RequestParam("deptID") Integer deptID,
            @RequestParam("age") Integer age,
            @RequestParam("post") String post,
            @RequestParam("avatar") String avatar,
            @RequestParam("intro") String intro,
            @RequestParam("username") String username,
            @RequestParam("password") String password
    ) {
        if(!SessionUtil.isAdmin()){
            return null;
        }
        return doctorService.addNewDoctor(new Doctor(id, username, password, name, gender, deptID, age, post, avatar, intro));
    }



    @RequestMapping("/discardAppointment")
    public boolean discardAppointment(
            @RequestParam("patientID") Integer patientID
    ) {
        if(!SessionUtil.isDoctor()){
            return false;
        }
        patientService.discardAppointment(patientID);
        return true;
    }

    @RequestMapping("/modifyDescription")
    public boolean modifyDescription(
            @RequestParam("ranking") int ranking,
            @RequestParam("patientID") int patientID,
            @RequestParam("deptID") int deptID,
            @RequestParam("doctorID") int doctorID,
            @RequestParam("date") Date date,
            @RequestParam("time") String time,
            @RequestParam("description") String desc
    ) {
        if(!SessionUtil.isDoctor()){
            return false;
        }
        Appointment appointment = new Appointment(
                ranking, patientID, deptID, doctorID, date, time, desc
        );
//        System.out.println(appointment);
        doctorService.modifyDescription(appointment);
        return true;
    }
}
