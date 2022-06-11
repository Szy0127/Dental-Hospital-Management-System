package com.sjtu.se.hospital.serviceimpl;

import com.sjtu.se.hospital.dao.HomeDao;
import com.sjtu.se.hospital.entity.News;
import com.sjtu.se.hospital.entity.Notification;
import com.sjtu.se.hospital.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeServiceImpl implements HomeService{
    @Autowired
    private HomeDao homeDao;

    @Override
    public List<News> getNews() {
        return homeDao.getNews();
    }

    @Override
    public List<Notification> getNotifications() {
        return homeDao.getNotifications();
    }

    @Override
    public News addNews(News news) {
        return homeDao.addNews(news);
    }

    @Override
    public Notification addNotification(Notification notification) {
        return homeDao.addNotification(notification);
    }
}
