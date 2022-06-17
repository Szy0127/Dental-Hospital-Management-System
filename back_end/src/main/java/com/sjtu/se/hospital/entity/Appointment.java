package com.sjtu.se.hospital.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Table(name = "appointment")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@IdClass(value = AppointmentCoKey.class)
public class Appointment implements Serializable {

    @Id
    @Column(name = "ranking")
    private Integer ranking;

    @Id
    @Column(name = "patient_id")
    private Integer patientID;

    @Column(name = "dept_id")
    private Integer deptID;

    @Id
    @Column(name = "doctor_id")
    private Integer doctorID;

    @Id
    @Column(name = "date")
    private java.sql.Date date;

    @Column(name = "time")
    private String time;

    @Column(name = "description")
    private String description;

    public Appointment(){}
    public Appointment(Integer patientID,Integer deptID,Integer doctorID,Date date,String time){
        this.patientID = patientID;
        this.deptID = deptID;
        this.doctorID = doctorID;
        this.date = date;
        this.time = time;

    }
    public Appointment(Integer ranking,Integer patientID,Integer deptID,Integer doctorID,Date date,String time){
        this.ranking = ranking;
        this.patientID = patientID;
        this.deptID = deptID;
        this.doctorID = doctorID;
        this.date = date;
        this.time = time;

    }
}
