package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.History;

import java.util.List;

public interface HistoryDao {
    List<History> getHistories();
}
