package com.sjtu.se.hospital.serviceimpl;

import com.sjtu.se.hospital.service.MQService;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class MQServiceImpl<T> implements MQService<T> {
    private static final Logger log = LoggerFactory.getLogger(MQServiceImpl.class);

    private static final String MESSAGE_KEY = "queue";

    @Resource
    private RedisTemplate<String, T> redisTemplate;

//    @Override
//    public void produce(T obj) {
//        redisTemplate.opsForList().leftPush(MESSAGE_KEY, obj);
//    }
//
//    @Override
//    public T consume() {
//        return redisTemplate.opsForList().rightPop(MESSAGE_KEY);
//    }
}
