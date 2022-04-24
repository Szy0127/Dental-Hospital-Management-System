package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.entity.History;
import com.sjtu.se.hospital.dao.HistoryDao;
import com.sjtu.se.hospital.entity.HistoryEdited;
import com.sjtu.se.hospital.repository.DepartmentRepository;
import com.sjtu.se.hospital.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;

@Repository
public class HistoryDaoImpl implements HistoryDao {
    @Autowired
    private HistoryRepository historyRepository;
    @Autowired
    private DepartmentRepository departmentRepository;

    private HistoryEdited getHistoryEdited(History p) {
        HistoryEdited he = new HistoryEdited();
        he.department = departmentRepository.getOne(p.getDeptID()).getTitle();
        he.id = p.getId();
        he.time = p.getTime();
        he.description = p.getDescription();
        return he;
    }

    @Override
    public List<HistoryEdited> getHistories() {
        List<History> his =  historyRepository.getHistories();
        LinkedList<HistoryEdited> res = new LinkedList<>();

        for (History p : his) {
            res.add(getHistoryEdited(p));
        }

        return res;
    }
}
