package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Patient;

public interface RecordDao {
    Patient getRecord(Integer ID);
}
