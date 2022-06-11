package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.User;

import java.util.List;

public interface UserDao {

    List<User> getUsersByUsername(String username);



    List<User> getUserByUsernameAndPassword(String username,String password);
}
