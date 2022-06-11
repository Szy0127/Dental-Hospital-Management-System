package com.sjtu.se.hospital.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.CustomLog;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "doctor")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class Doctor {

    @Id
    @Column(name = "id")
    private int id;

    private String name;
    private String gender;
    private Integer deptID;
    private Integer age;
    private String post;
    private String avatar;
    private String intro;
}