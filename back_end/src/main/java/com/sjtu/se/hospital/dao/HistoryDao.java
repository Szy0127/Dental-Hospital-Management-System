package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.History;
import com.sjtu.se.hospital.entity.HistoryEdited;

import java.sql.Date;
import java.util.List;

public interface HistoryDao {
    List<HistoryEdited> getHistories(Integer ID);
    void addHistory(History newHis);
    void updateHistory(Integer ID, Date time, String newDes);
}
