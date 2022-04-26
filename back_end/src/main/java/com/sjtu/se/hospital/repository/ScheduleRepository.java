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
import java.sql.Date;
import java.util.List;
import java.util.Optional;

public interface ScheduleRepository extends JpaRepository<Schedule, ScheduleCoKey> {

    @Lock(value = LockModeType.PESSIMISTIC_WRITE)
    @Override
    Optional<Schedule> findById(ScheduleCoKey scheduleCoKey);

    @Query(value = "update schedule set n_morning = n_morning+1,rank_morning=rank_morning+1 where doctorID=:doctorID and date=:date",nativeQuery = true)
    @Modifying
    void updateMorning(
            @Param("doctorID") Integer doctorID,
            @Param("date")java.sql.Date date);

    @Query(value = "update schedule set n_afternoon = n_afternoon+1,rank_afternoon=rank_afternoon+1 where doctorID=:doctorID and date=:date",nativeQuery = true)
    @Modifying
    void updateAfternoon(
            @Param("doctorID") Integer doctorID,
            @Param("date")Date date);

    @Query(value = "update schedule set n_morning = n_morning-1 where doctorID=:doctorID and date=:date",nativeQuery = true)
    @Modifying
    void cancelMorning(
            @Param("doctorID") Integer doctorID,
            @Param("date")Date date);

    @Query(value = "update schedule set n_afternoon = n_afternoon-1 where doctorID=:doctorID and date=:date",nativeQuery = true)
    @Modifying
    void cancelAfternoon(
            @Param("doctorID") Integer doctorID,
            @Param("date")Date date);


    @Query("select s from Schedule s where s.date=:date")
    List<Schedule> getFullScheduleByDateTime(
            @Param("date") Date date
    );

    @Query("select s from Schedule s where s.doctorID=:ID")
    List<Schedule> getSchedule(@Param("ID")Integer ID);
}
