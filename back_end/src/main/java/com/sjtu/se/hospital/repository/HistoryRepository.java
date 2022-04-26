package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

public interface HistoryRepository extends JpaRepository<History,Integer> {
    @Query("select h from History h where h.patientID=:ID")
    List<History> getHistories(@Param("ID") Integer ID);

    @Modifying
    @Query("update History h set h.description=:newDes where h.patientID=:ID and h.time=:time")
    void updateDescription(@Param("ID") Integer ID, @Param("time")Date time);
}
