package com.reins.bookstore.serviceimpl;

import com.reins.bookstore.dao.HistoryDao;
import com.reins.bookstore.entity.History;
import com.reins.bookstore.service.HistoryService;
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
