package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;

import javax.persistence.LockModeType;
import java.util.List;

public interface UserRepository extends JpaRepository<User,Integer> {

    @Lock(value = LockModeType.PESSIMISTIC_WRITE)
    List<User> getUsersByUsername(String username);

    List<User> getUserByUsernameAndPassword(String username, String password);
}
