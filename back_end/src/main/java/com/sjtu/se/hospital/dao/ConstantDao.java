package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.Constant;

public interface ConstantDao {
    Integer getMorningMax();
    Integer getAfternoonMax();
    Integer getPunishCount();
    Integer getPunishDuration();

    Constant modify(Constant constant);
}
