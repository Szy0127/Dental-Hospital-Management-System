package com.sjtu.se.hospital.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.integration.redis.util.RedisLockRegistry;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;


@RequiredArgsConstructor
public class RedisLockService {


    private static final long DEFAULT_EXPIRE_UNUSED = 60000L;

    private final RedisLockRegistry redisLockRegistry;

    public void lock(String lockKey) {
        Lock lock = obtainLock(lockKey);
        lock.lock();
    }

    public boolean tryLock(String lockKey) {
        Lock lock = obtainLock(lockKey);
        return lock.tryLock();
    }

    public boolean tryLock(String lockKey, long seconds) {
        Lock lock = obtainLock(lockKey);
        try {
            return lock.tryLock(seconds, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            return false;
        }
    }

    public void unlock(String lockKey) {
        try {
            Lock lock = obtainLock(lockKey);
            lock.unlock();
            redisLockRegistry.expireUnusedOlderThan(DEFAULT_EXPIRE_UNUSED);
        } catch (Exception e) {

        }
    }

    private Lock obtainLock(String lockKey) {
        return redisLockRegistry.obtain(lockKey);
    }

}