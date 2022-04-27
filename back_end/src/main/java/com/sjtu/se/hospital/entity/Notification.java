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
@Table(name = "notification")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Notification {
    @Id
    @Column(name = "ID")
    private Integer id;

    private Date date;
    private String title;
    private String content;

    public Notification() {}
    public Notification(Integer id, Date date, String title, String content) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.content = content;
    }
}
