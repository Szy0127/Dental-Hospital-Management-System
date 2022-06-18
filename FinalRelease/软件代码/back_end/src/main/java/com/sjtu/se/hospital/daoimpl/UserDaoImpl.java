package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.dao.UserDao;
import com.sjtu.se.hospital.entity.User;
import com.sjtu.se.hospital.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {
    @Autowired
    UserRepository userRepository;
    @Override
    public List<User> getUsersByUsername(String username) {
        return userRepository.getUsersByUsername(username);
    }


    @Override
    public List<User> getUserByUsernameAndPassword(String username, String password) {
        return userRepository.getUserByUsernameAndPassword(username, password);
    }
}
