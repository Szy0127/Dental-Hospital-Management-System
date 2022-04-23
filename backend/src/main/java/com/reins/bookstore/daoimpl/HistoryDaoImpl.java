package com.reins.bookstore.daoimpl;

import com.reins.bookstore.dao.HistoryDao;
import com.reins.bookstore.entity.History;
import com.reins.bookstore.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class HistoryDaoImpl implements HistoryDao {
    @Autowired
    private HistoryRepository historyRepository;

    @Override
    public List<History> getHistories() {
        return historyRepository.getHistories();
    }
}
