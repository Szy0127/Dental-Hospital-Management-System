package com.sjtu.se.hospital.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigInteger;
import java.util.Date;


@Data
@Entity
@Table(name = "appointment")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "recordId")
public class Appointment {

    @Id
    @Column(name = "id")
    private Integer id;

    private Integer patientID;
    private Integer deptID;
    private Integer doctorID;
    private Date date;

    public Appointment(){}
    public Appointment(Integer patientID,Integer deptID){
        this.patientID = patientID;
        this.id = 44;
        this.deptID = deptID;
        this.doctorID = 1;
        this.date = new Date();
    }

}
