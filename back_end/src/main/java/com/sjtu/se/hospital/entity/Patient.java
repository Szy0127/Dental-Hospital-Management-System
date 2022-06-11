package com.sjtu.se.hospital.entity;

import com.sjtu.se.hospital.constant.Constant;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@NoArgsConstructor
@Entity
@Data
@Table(name = "patient")
public class Patient extends User{

    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "gender")
    private String gender;
    @Basic
    @Column(name = "email")
    private String email;
    @Basic
    @Column(name = "phone")
    private String phone;
    @Basic
    @Column(name = "age")
    private Integer age;

    @Column(name = "punish_count")
    private Integer punish_count;

    @Column(name="punish_begin")
    private Timestamp punish_begin;

    public Patient(String name,String gender,String email,String phone,Integer age){
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.punish_count = 0;
        this.punish_begin = new Timestamp(new Date().getTime());
        this.setType(Constant.Type_Patient);
    }
}
