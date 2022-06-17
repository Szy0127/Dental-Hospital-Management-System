package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.entity.History;
import com.sjtu.se.hospital.dao.HistoryDao;
import com.sjtu.se.hospital.repository.DepartmentRepository;
import com.sjtu.se.hospital.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public class HistoryDaoImpl implements HistoryDao {
    @Autowired
    private HistoryRepository historyRepository;
    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public List<History> getHistories(Integer ID) {
        return historyRepository.getHistories(ID);
    }

    @Override
    public void addHistory(History newHis) {
        historyRepository.save(newHis);
    }
    public void removeHistory(History newHis) {
        historyRepository.delete(newHis);
    }

    @Override
    public void updateHistory(Integer ID, Date time, String newDes) {
        historyRepository.updateDescription(ID, time, newDes);
    }
}
