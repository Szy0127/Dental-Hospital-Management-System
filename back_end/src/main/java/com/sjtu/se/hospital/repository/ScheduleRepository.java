package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.Schedule;
import com.sjtu.se.hospital.entity.ScheduleCoKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.LockModeType;
import java.util.Date;
import java.util.Optional;

public interface ScheduleRepository extends JpaRepository<Schedule, ScheduleCoKey> {


    @Lock(value = LockModeType.PESSIMISTIC_WRITE)
    @Override
    Optional<Schedule> findById(ScheduleCoKey scheduleCoKey);

    @Query(value = "update schedule set n_morning = n_morning+1 where doctorID=:doctorID and date=:date",nativeQuery = true)
//    @Query(value = "update schedule set n_morning = n_morning+1",nativeQuery = true)
    @Modifying
    void updateMorning(
            @Param("doctorID") Integer doctorID,
            @Param("date")java.sql.Date date);

    @Query(value = "update schedule set n_afternoon = n_afternoon+1 where doctorID=:doctorID and date=:date",nativeQuery = true)
//    @Query(value = "update schedule set n_morning = n_morning+1",nativeQuery = true)
    @Modifying
    void updateAfternoon(
            @Param("doctorID") Integer doctorID,
            @Param("date")java.sql.Date date);
}
