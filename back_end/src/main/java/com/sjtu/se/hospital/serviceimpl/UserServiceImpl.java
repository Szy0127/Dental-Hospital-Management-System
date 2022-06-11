package com.sjtu.se.hospital.serviceimpl;


import com.sjtu.se.hospital.constant.Constant;
import com.sjtu.se.hospital.dao.PatientDao;
import com.sjtu.se.hospital.dao.UserDao;
import com.sjtu.se.hospital.entity.User;
import com.sjtu.se.hospital.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserDao userDao;

    @Autowired
    PatientDao patientDao;

    @Override
    public boolean checkValid(String username) {
        return userDao.getUsersByUsername(username).isEmpty();
    }



    @Override
    public User login(String username, String password) {

        List<User> users = userDao.getUserByUsernameAndPassword(username, password);
        if(users.isEmpty()){
            return null;
        }
        User user = users.get(0);
        if(user.getType()== Constant.Type_Patient){
            return patientDao.getPatientByID(user.getId());
        }
        return users.get(0);
    }
}
