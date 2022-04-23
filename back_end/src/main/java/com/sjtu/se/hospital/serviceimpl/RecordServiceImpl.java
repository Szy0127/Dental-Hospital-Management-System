package com.sjtu.se.hospital.serviceimpl;

import com.sjtu.se.hospital.dao.RecordDao;
import com.sjtu.se.hospital.entity.Record;
import com.sjtu.se.hospital.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName BookServiceImpl
 * @Description the Implement of BookService
 * @Author thunderBoy
 * @Date 2019/11/6 16:04
 */

@Service
public class RecordServiceImpl implements RecordService {

    @Autowired
    private RecordDao recordDao;

    @Override
    public Record getRecord(Integer ID) {
        return recordDao.getRecord(ID);
    }

    @Override
    public void addRecord(Record record) {
        recordDao.addRecord(record);
    }

    @Override
    public void delRecord(Record record) {
        recordDao.delRecord(record);
    }

}
