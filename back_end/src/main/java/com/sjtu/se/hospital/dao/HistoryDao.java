package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.History;

import java.sql.Date;
import java.util.List;

public interface HistoryDao {
    List<History> getHistories(Integer ID);
    void addHistory(History newHis);
    void removeHistory(History newHis);
    void updateHistory(Integer ID, Date time, String newDes);
}
