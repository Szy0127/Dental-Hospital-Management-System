package com.sjtu.se.hospital.controller;

import com.sjtu.se.hospital.entity.Record;
import com.sjtu.se.hospital.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RecordController {
    @Autowired
    private RecordService recordService;

    @CrossOrigin
    @RequestMapping("/getRecord")
    public Record getRecord(@RequestParam("ID") Integer ID) {
        return recordService.getRecord(ID);
    }

    @RequestMapping("/addRecord")
    public void addRecord(
            @RequestBody Record record
    ) {
        System.out.println(record);
        recordService.addRecord(record);
    }
    @RequestMapping("/delRecord")
    public void delRecord(
            @RequestBody Record record
    ) {
        System.out.println(record);
        recordService.delRecord(record);
    }
}

