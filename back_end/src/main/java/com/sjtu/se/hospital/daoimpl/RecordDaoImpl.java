package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.entity.Record;
import com.sjtu.se.hospital.dao.RecordDao;
import com.sjtu.se.hospital.repository.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RecordDaoImpl implements RecordDao {

    @Autowired
    private RecordRepository recordRepository;

    @Override
    public Record getRecord(Integer ID) {
        return recordRepository.getOne(ID);
    }
}
