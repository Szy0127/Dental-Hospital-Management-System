package com.sjtu.se.hospital.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Table(name = "schedule")
//@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@IdClass(value = ScheduleCoKey.class)
public class Schedule {

    @Id
    @Column(name="doctorID")
    private Integer doctorID;

    @Id
    @Column(name="date")
//    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private java.sql.Date date;

    @Column(name="n_morning")
    private  Integer n_morning;

    @Column(name="n_afternoon")
    private  Integer n_afternoon;

    @Column(name="content")
    private  String content;


    public void setDate(java.sql.Date date) {
        this.date = date;
    }

    public Schedule(){}
    public Schedule(Integer doctorID,Date date){
        this.doctorID = doctorID;
        this.date = date;
        this.n_afternoon = 0;
        this.n_morning = 0;
        this.content = "门诊";
    }


}
