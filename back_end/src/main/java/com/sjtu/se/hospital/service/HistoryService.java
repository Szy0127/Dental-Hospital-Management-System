package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.HistoryEdited;

import java.util.List;

public interface HistoryService {
    List<HistoryEdited> getHistories();
}
