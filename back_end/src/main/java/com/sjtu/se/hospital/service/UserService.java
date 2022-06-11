package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.User;

public interface UserService {

    boolean checkValid(String username);



    User login(String username,String password);
}
