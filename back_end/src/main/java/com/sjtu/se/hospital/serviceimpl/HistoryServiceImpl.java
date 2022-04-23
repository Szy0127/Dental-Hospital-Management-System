package com.sjtu.se.hospital.serviceimpl;

import com.sjtu.se.hospital.dao.HistoryDao;
import com.sjtu.se.hospital.entity.History;
import com.sjtu.se.hospital.service.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryServiceImpl implements HistoryService {
    @Autowired
    private HistoryDao historyDao;

    @Override
    public List<History> getHistories() {
        return historyDao.getHistories();
    }
}
