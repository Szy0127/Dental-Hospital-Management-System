package com.reins.bookstore.repository;

import com.reins.bookstore.entity.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HistoryRepository extends JpaRepository<History,Integer> {
    @Query("select h from History h")
    List<History> getHistories();
}
