package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.dao.HomeDao;
import com.sjtu.se.hospital.entity.News;
import com.sjtu.se.hospital.entity.Notification;
import com.sjtu.se.hospital.repository.NewsRepository;
import com.sjtu.se.hospital.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;


@Repository
public class HomeDaoImpl implements HomeDao {
    @Autowired
    private NewsRepository newsRepository;
    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public List<News> getNews() {
        LinkedList<News> sortedNews = new LinkedList<>();
        List<News> oldNews = newsRepository.getNews();

        for (News p : oldNews) {
            sortedNews.addFirst(p);
        }

        return sortedNews;
    }

    @Override
    public List<Notification> getNotifications() {
        LinkedList<Notification> sorted = new LinkedList<>();
        List<Notification> old = notificationRepository.getNotifications();

        for (Notification p : old) {
            sorted.addFirst(p);
        }

        return sorted;
    }

    @Override
    public News addNews(News news) {
        return newsRepository.save(news);
    }

    @Override
    public Notification addNotification(Notification notification) {
        return notificationRepository.save(notification);
    }
}
