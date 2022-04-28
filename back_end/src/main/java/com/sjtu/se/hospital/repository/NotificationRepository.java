package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.News;
import com.sjtu.se.hospital.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification,Integer> {
    @Query("select n from Notification n")
    List<Notification> getNotifications();
}
