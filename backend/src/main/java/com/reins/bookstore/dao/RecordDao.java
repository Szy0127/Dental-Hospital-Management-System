package com.reins.bookstore.dao;

import com.reins.bookstore.entity.Record;

public interface RecordDao {
    Record getRecord(Integer ID);
    void addRecord(Record record);
    void delRecord(Record record);
}
