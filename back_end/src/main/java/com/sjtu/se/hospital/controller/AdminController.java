package com.sjtu.se.hospital.controller;

import com.sjtu.se.hospital.entity.Constant;
import com.sjtu.se.hospital.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping("/modifyConstants")
    void modifyConstants(
            @RequestParam("morningMax") Integer morningMax,
            @RequestParam("afternoonMax") Integer afternoonMax,
            @RequestParam("punishCount") Integer punishCount,
            @RequestParam("punishDuration") Integer punishDuration
    ) {
        adminService.modifyConstants(morningMax,afternoonMax,punishCount,punishDuration);
    }
    @RequestMapping("/getConstants")
    Constant getConstants(
    ) {
        return adminService.getConstants();
    }


}
