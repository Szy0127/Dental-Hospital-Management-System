package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NewsRepository extends JpaRepository<News,Integer> {
    @Query("select n from News n")
    List<News> getNews();
}
