package com.sjtu.se.hospital.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Data
@Entity
@Table(name = "history")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class History {

    @Id
    @Column(name = "id")
    private int id;

    private Date time;
    @Column(name = "patient_id")
    private int patientID;
    @Column(name = "dept_id")
    private int deptID;
    private String description;

    public History(){}
    public History(Date time, Integer patientID, Integer deptID){
        this.id = 0 ;
        this.time = time;
        this.patientID = patientID;
        this.deptID = deptID;
        this.description = "{\"disease\":\"\",\"commentA\":\"\",\"commentB\":\"\",\"commentC\":\"\",\"medicine\":\"\"}";
    }
}
