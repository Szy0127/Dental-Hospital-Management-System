package com.reins.bookstore.controller;
import com.reins.bookstore.entity.Record;
import com.reins.bookstore.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RecordController {
    @Autowired
    private RecordService recordService;

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

