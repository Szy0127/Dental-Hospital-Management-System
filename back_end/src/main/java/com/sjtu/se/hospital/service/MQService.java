package com.sjtu.se.hospital.service;

public interface MQService<T> {

    void produce(T obj);
    T consume();
}
