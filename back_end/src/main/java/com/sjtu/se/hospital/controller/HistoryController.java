package com.sjtu.se.hospital.controller;

import com.sjtu.se.hospital.entity.HistoryEdited;
import com.sjtu.se.hospital.service.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class HistoryController {
    @Autowired
    private HistoryService historyService;

    @RequestMapping("/getHistories")
    public List<HistoryEdited> getHistories(@RequestBody Map<String, String> params) {
        return historyService.getHistories();
    }
}
