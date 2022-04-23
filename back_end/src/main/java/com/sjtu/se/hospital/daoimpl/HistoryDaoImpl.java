package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.entity.History;
import com.sjtu.se.hospital.dao.HistoryDao;
import com.sjtu.se.hospital.repository.HistoryRepository;
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
