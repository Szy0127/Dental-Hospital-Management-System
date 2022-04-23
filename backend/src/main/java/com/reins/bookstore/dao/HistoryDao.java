package com.reins.bookstore.dao;

import com.reins.bookstore.entity.History;

import java.util.List;

public interface HistoryDao {
    List<History> getHistories();
}
