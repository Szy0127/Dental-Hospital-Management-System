package com.reins.bookstore.serviceimpl;

import com.reins.bookstore.dao.RecordDao;
import com.reins.bookstore.entity.Record;
import com.reins.bookstore.service.RecordService;
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
