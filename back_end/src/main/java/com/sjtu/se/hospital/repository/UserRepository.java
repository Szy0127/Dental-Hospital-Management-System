package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Integer> {

    List<User> getUsersByUsername(String username);

    List<User> getUserByUsernameAndPassword(String username, String password);
}
