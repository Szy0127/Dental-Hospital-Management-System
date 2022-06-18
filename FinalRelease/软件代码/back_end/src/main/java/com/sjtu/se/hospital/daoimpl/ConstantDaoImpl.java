package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.dao.ConstantDao;
import com.sjtu.se.hospital.entity.Constant;
import com.sjtu.se.hospital.repository.ConstantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Repository;


@Repository
public class ConstantDaoImpl implements ConstantDao {

    @Autowired
    ConstantRepository constantRepository;

    @Cacheable(value={"Constant"},key="1")
    public Constant getConstant(){
        return constantRepository.findAll().get(0);
    }

    @CachePut(value={"Constant"},key="1")
    @Override
    public Constant modify(Constant constant) {
        constantRepository.deleteAll();
        constantRepository.save(constant);
        return constant;
    }

    @Override
    public Integer getAfternoonMax() {
        return getConstant().getAfternoonMax();
    }

    @Override
    public Integer getMorningMax() {
        return getConstant().getMorningMax();
    }

    @Override
    public Integer getPunishCount() {
        return getConstant().getPunishCount();
    }

    @Override
    public Integer getPunishDuration() {
        return getConstant().getPunishDuration();
    }
}
