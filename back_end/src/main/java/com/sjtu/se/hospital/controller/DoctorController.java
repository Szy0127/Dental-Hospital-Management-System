package com.sjtu.se.hospital.controller;

import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.entity.DoctorEdited;
import com.sjtu.se.hospital.entity.Schedule;
import com.sjtu.se.hospital.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.print.Doc;
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

    @RequestMapping("/modifyDoctor")
    Doctor addNewDoctor(
            @RequestParam("id") Integer id, //添加新医生：0， 修改医生信息：需指定id
            @RequestParam("name") String name,
            @RequestParam("gender") String gender,
            @RequestParam("deptId") Integer deptId,
            @RequestParam("age") Integer age,
            @RequestParam("post") String post,
            @RequestParam("avatar") String avatar,
            @RequestParam("intro") String intro,
            @RequestParam("username") String username,
            @RequestParam("password") String password
    ) {
        return doctorService.addNewDoctor(new Doctor(id, username, password, name, gender, deptId, age, post, avatar, intro));
    }

    @RequestMapping("/delDoctor")
    void delDoctor(@RequestParam("doctorId") int doctorId) {
        doctorService.delDoctor(doctorId);
    }
}
