package com.reins.bookstore.controller;

import com.reins.bookstore.entity.History;
import com.reins.bookstore.service.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class HistoryController {
    @Autowired
    private HistoryService historyService;

    @RequestMapping("/getHistories")
    public List<History> getHistories(@RequestBody Map<String, String> params) {
        return historyService.getHistories();
    }
}
