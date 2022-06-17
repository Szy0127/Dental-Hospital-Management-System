package com.sjtu.se.hospital.serviceimpl;

import com.sjtu.se.hospital.dao.ConstantDao;
import com.sjtu.se.hospital.entity.Constant;
import com.sjtu.se.hospital.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    ConstantDao constantDao;
    @Override
    public void modifyConstants(Integer morningMax, Integer afternoonMax, Integer punishCount, Integer punishDuration) {
        constantDao.modify(new Constant(morningMax, afternoonMax, punishCount, punishCount));
    }

    @Override
    public Constant getConstants() {
        return constantDao.get
    }
}
