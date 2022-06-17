package com.sjtu.se.hospital.serviceimpl;


import com.sjtu.se.hospital.constant.Constant;
import com.sjtu.se.hospital.dao.DoctorDao;
import com.sjtu.se.hospital.dao.PatientDao;
import com.sjtu.se.hospital.dao.UserDao;
import com.sjtu.se.hospital.entity.User;
import com.sjtu.se.hospital.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserDao userDao;

    @Autowired
    PatientDao patientDao;
    @Autowired
    DoctorDao doctorDao;

    @Override
    public boolean checkValid(String username) {
        return userDao.getUsersByUsername(username).isEmpty();
    }


    //为了测试不报org.hibernate.LazyInitializationException: could not initialize proxy - no session
    //实际上不需要
    @Transactional
    @Override
    public User login(String username, String password) {

        List<User> users = userDao.getUserByUsernameAndPassword(username, password);
        if (users.isEmpty()) {
            return null;
        }
        User user = users.get(0);
        if (user.getType() == Constant.Type_Patient) {
            return patientDao.getPatientByID(user.getId());
        }
        if (user.getType() == Constant.Type_Doctor) {
            return doctorDao.getDoctor(user.getId());
        }
        return user;
    }
}
