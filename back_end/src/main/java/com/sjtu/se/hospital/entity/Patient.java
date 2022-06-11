package com.sjtu.se.hospital.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Data
@Entity
@Table(name = "patient")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class Patient {

    @Id
    @Column(name = "id")
    private int id;

    private String name;
    private String gender;
    private String email;
    private String phone;
    private Integer age;
    private String account;
}
