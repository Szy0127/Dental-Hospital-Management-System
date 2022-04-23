package com.reins.bookstore.service;

import com.reins.bookstore.entity.Record;

public interface RecordService {
    Record getRecord(Integer ID);
    void addRecord(Record record);
    void delRecord(Record record);
}
