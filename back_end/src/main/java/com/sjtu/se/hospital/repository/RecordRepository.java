package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import javax.transaction.Transactional;

public interface RecordRepository extends JpaRepository<Patient,Integer> {

    @Transactional
    @Modifying
    @Query(value="insert into `patient` values (:ID,:name,:gender,:email,:phone,:age,:account);",nativeQuery = true)
    void addRecord(
            @Param("ID")Integer ID,
            @Param("name")String name,
            @Param("gender")String gender,
            @Param("email")String email,
            @Param("phone")String phone,
            @Param("age")Integer age,
            @Param("account")String account
    );
}
