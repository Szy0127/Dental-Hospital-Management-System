package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HistoryRepository extends JpaRepository<History,Integer> {
    @Query("select h from History h")
    List<History> getHistories();
}
