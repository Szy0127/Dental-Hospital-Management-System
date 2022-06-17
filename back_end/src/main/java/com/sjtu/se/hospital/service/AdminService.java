package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.Constant;

public interface AdminService {

    void modifyConstants(Integer morningMax, Integer afternoonMax, Integer punishCount, Integer punishDuration);

    Constant getConstants();
}
