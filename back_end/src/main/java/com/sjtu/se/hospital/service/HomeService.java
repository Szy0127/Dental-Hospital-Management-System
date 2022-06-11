package com.sjtu.se.hospital.service;

import com.sjtu.se.hospital.entity.News;
import com.sjtu.se.hospital.entity.Notification;

import java.util.List;

public interface HomeService {
    List<News> getNews();
    List<Notification> getNotifications();
    News addNews(News news);
    Notification addNotification(Notification notification);
}
