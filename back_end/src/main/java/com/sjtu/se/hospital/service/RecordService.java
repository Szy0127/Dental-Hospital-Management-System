package com.sjtu.se.hospital.service;


import com.sjtu.se.hospital.entity.Record;

public interface RecordService {
    Record getRecord(Integer ID);
    void addRecord(Record record);
    void delRecord(Record record);
}
