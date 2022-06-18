package com.sjtu.se.hospital.dao;

import com.sjtu.se.hospital.entity.News;
import com.sjtu.se.hospital.entity.Notification;

import java.util.List;

public interface HomeDao {
    List<News> getNews();
    List<Notification> getNotifications();
    News addNews(News news);
    Notification addNotification(Notification notification);
}
