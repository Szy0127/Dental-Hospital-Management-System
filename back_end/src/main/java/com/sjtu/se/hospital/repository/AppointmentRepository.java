package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {


//    int getRemain(){
//        return 10;
//    }
    @Query("select b from Appointment b")
    List<Appointment> getRecords();

//    @SQLInsert(sql="insert INTO `record` VALUES (10,10,10,10);")
    @Transactional
    @Modifying
    @Query(value="insert INTO `record` VALUES (:id,:date,:commodity,:price,:source);",nativeQuery = true)
    void addRecord(
            @Param("id")BigInteger id,
            @Param("date")String date,
            @Param("commodity")String commodity,
            @Param("price")Integer price,
            @Param("source")String source
    );

//    @Transactional
//    @Modifying
//    @Query(value="delete from `record` where id = :id;",nativeQuery = true)
//    void delRecord(
//            @Param("id")BigInteger id
//    );

}
