package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Record;

public interface RecordDao {
    Record getRecord(Integer ID);
    void addRecord(Record record);
    void delRecord(Record record);
}