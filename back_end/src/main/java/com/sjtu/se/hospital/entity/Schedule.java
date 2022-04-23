package com.sjtu.se.hospital.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "schedule")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@IdClass(value = ScheduleCoKey.class)
public class Schedule {

    @Id
    @Column(name="doctorID")
    private Integer doctorID;

    @Id
    @Column(name="date")
    private Date date;

    @Column(name="n_morning")
    private  Integer n_morning;

    @Column(name="n_afternoon")
    private  Integer n_afternoon;

    @Column(name="content")
    private  String content;



}
