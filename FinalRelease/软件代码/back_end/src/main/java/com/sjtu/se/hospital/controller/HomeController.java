package com.sjtu.se.hospital.controller;


import com.sjtu.se.hospital.entity.News;
import com.sjtu.se.hospital.entity.Notification;
import com.sjtu.se.hospital.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.List;

@CrossOrigin
@RestController
public class HomeController {
    @Autowired
    private HomeService homeService;

    @RequestMapping("/getNews")
    public List<News> getNews() {
        return homeService.getNews();
    }

    @RequestMapping("/getNotifications")
    public List<Notification> getNotifications() {
        return homeService.getNotifications();
    }


}
