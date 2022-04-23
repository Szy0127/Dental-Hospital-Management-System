package com.reins.bookstore.daoimpl;

import com.reins.bookstore.dao.RecordDao;
import com.reins.bookstore.entity.Record;
import com.reins.bookstore.repository.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RecordDaoImpl implements RecordDao {

    @Autowired
    private RecordRepository recordRepository;

    @Override
    public Record getRecord(Integer ID) {
        return recordRepository.getOne(ID);
    }
    @Override
    public void addRecord(Record record) {
        recordRepository.addRecord(
                record.getId(),
                record.getName(),
                record.getGender(),
                record.getEmail(),
                record.getPhone(),
                record.getAge(),
                record.getAccount()
        );
    }
    @Override
    public void delRecord(Record record) {
        recordRepository.delete(record);
    }
}
