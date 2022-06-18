package com.sjtu.se.hospital.controller;

import com.sjtu.se.hospital.entity.Constant;
import com.sjtu.se.hospital.entity.News;
import com.sjtu.se.hospital.entity.Notification;
import com.sjtu.se.hospital.service.AdminService;
import com.sjtu.se.hospital.service.DoctorService;
import com.sjtu.se.hospital.service.HomeService;
import com.sjtu.se.hospital.utils.SessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;


@RestController
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private HomeService homeService;

    @Autowired
    private DoctorService doctorService;

    @RequestMapping("/modifyConstants")
    public void modifyConstants(
            @RequestParam("morningMax") Integer morningMax,
            @RequestParam("afternoonMax") Integer afternoonMax,
            @RequestParam("punishCount") Integer punishCount,
            @RequestParam("punishDuration") Integer punishDuration
    ) {
        if(!SessionUtil.isAdmin()){
            return;
        }
        adminService.modifyConstants(morningMax,afternoonMax,punishCount,punishDuration);
    }
    @RequestMapping("/getConstants")
    public Constant getConstants(
    ) {
        if(!SessionUtil.isAdmin()){
            return null;
        }
        return adminService.getConstants();
    }

    @RequestMapping("/addNews")
    public News addNews(
            @RequestParam("date") Date date,
            @RequestParam("title") String title,
            @RequestParam("content") String content
    ) {
        if(!SessionUtil.isAdmin()){
            return null;
        }
        return homeService.addNews(new News(date, title, content));
    }

    @RequestMapping("/addNotification")
    public Notification addNotification(
            @RequestParam("date") Date date,
            @RequestParam("title") String title,
            @RequestParam("content") String content
    ) {
        if(!SessionUtil.isAdmin()){
            return null;
        }
        return homeService.addNotification(new Notification(date, title, content));
    }


    @RequestMapping("/delDoctor")
    public boolean delDoctor(@RequestParam("doctorId") int doctorId) {
        if(!SessionUtil.isAdmin()){
            return false;
        }
        doctorService.delDoctor(doctorId);
        return true;
    }

}
