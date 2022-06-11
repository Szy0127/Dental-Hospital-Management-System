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
@Table(name = "news")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class News {
    @Id
    @Column(name="id")
    private Integer id;

    private Date date;
    private String title;
    private String content;

    public News() {}
    public News(Integer ID, Date date, String title, String content) {
        this.id = ID;
        this.date = date;
        this.title = title;
        this.content = content;
    }

}